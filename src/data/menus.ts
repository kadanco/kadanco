// src/data/menus.ts
//
// The site's link groups, shared by the nav (dropdowns) and the footer
// (columns), so both always list the same pages in the same order.
// Use cases come from src/data/use-cases.ts. To add a resource (for example
// blog posts later), add one entry to `resources` below.

import { useCases } from './use-cases';
import type { Locale } from '../i18n/ui';
import type { IsoIconName } from './iso-icons';

export type MenuItem = { label: string; href: string; all?: boolean; icon?: IsoIconName };
export type Menu = { key: string; items: MenuItem[] };

export function siteMenus(locale: Locale, t: (key: string) => string): Menu[] {
  const services: MenuItem[] = [
    { label: 'Product Design', href: '/#product', icon: 'layers' },
    { label: 'Marketing & Positioning', href: '/#marketing', icon: 'target' },
    { label: 'Sales', href: '/#sales', icon: 'growth' },
  ];
  // pages link to their detail page; case studies to their card on /use-cases/
  const cases: MenuItem[] = useCases.map((u) => ({
    label: (u[locale] ?? u.en).name,
    href: u.kind === 'page' && u.href ? u.href : `/use-cases/#${u.id}`,
    icon: u.icon,
  }));
  const resources: MenuItem[] = [
    { label: t('nav.glossary'), href: '/glossary/', icon: 'docs' },
    { label: t('nav.faq'), href: '/#faq', icon: 'seo' },
  ];
  return [
    { key: 'nav.services', items: services },
    { key: 'nav.usecases', items: [...cases, { label: t('nav.allusecases'), href: '/use-cases/', all: true }] },
    { key: 'nav.resources', items: resources },
  ];
}
