// src/data/menus.ts
//
// The site's link groups, shared by the nav (dropdowns) and the footer
// (columns), so both always list the same pages in the same order.
// Use cases come from src/data/use-cases.ts. To add a resource (for example
// blog posts later), add one entry to `resources` below.

import { navCases, footerCases } from './use-cases';
import type { Locale } from '../i18n/ui';
import type { IsoIconName } from './iso-icons';

export type MenuItem = { label: string; href: string; all?: boolean; icon?: IsoIconName };
export type Menu = { key: string; items: MenuItem[] };

// place: 'nav' lists the nav use cases, 'footer' the footer ones (see src/data/use-cases.ts)
export function siteMenus(locale: Locale, t: (key: string) => string, place: 'nav' | 'footer' = 'nav'): Menu[] {
  // service names, owner decision 2026-10-22
  const names = {
    en: ['Product Design & Development', 'Digital Marketing & Branding', 'Sales Support & Systems'],
    de: ['Produktdesign & Entwicklung', 'Digitales Marketing & Branding', 'Vertriebsunterstützung & Systeme'],
  }[locale] ?? [];
  const services: MenuItem[] = [
    { label: names[0], href: '/#product', icon: 'layers' },
    { label: names[1], href: '/#marketing', icon: 'target' },
    { label: names[2], href: '/#sales', icon: 'growth' },
  ];
  const cases: MenuItem[] = (place === 'nav' ? navCases : footerCases).map((u) => ({
    label: (u[locale] ?? u.en).name,
    href: u.href ?? '/',
    icon: u.icon,
  }));
  const resources: MenuItem[] = [
    { label: t('nav.glossary'), href: '/glossary/', icon: 'docs' },
    { label: t('nav.faq'), href: '/#faq', icon: 'seo' },
  ];
  return [
    { key: 'nav.services', items: services },
    { key: 'nav.usecases', items: cases }, // no "All use cases": the overview page is hidden for now
    { key: 'nav.resources', items: resources },
  ];
}
