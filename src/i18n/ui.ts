// src/i18n/ui.ts
//
// The single source of truth for languages: which locales exist, which pages
// actually have a German version, and every string used by the shared chrome
// (nav, footer, contact modal).
//
// Adding a translated page is a two-step job: create the file under
// src/pages/de/..., then add its English path to translatedRoutes.de below.
// Until a path is listed there, links and the language switcher keep pointing
// at English, so nothing ever links into an empty page.
//
// German voice: formal "Sie" throughout. No em dashes.

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Locales offered in the switcher.
export const switcherLocales: Locale[] = ['en', 'de'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
};

// Paths (English form, no locale prefix, no trailing slash) that have a REAL
// translated page. The English and German legal pages each stand on their own;
// neither is presented as a translation of the other.
export const translatedRoutes: Partial<Record<Locale, string[]>> = {
  de: [
    '/',
    '/ux-audit',
    '/website-audit',
    '/marketing-audit',
    '/pipeline-audit',
    '/strategy-call',
    '/use-cases/dach-market-entry',
    '/use-cases/product-design',
    '/use-cases/website-production',
    '/use-cases/content-production',
    '/use-cases/positioning-and-brand',
    '/use-cases/event-lead-generation',
    '/use-cases/outbound-sales-pipeline',
    '/use-cases/account-based-marketing',
    '/privacy-policy',
    '/imprint',
  ],
};

type Dict = Record<string, string>;

const en: Dict = {
  // nav
  'nav.glossary': 'Glossary',
  'nav.usecases': 'Use Cases',
  'nav.faq': 'FAQ',
  'nav.services': 'Services',
  'nav.resources': 'Resources',
  'nav.allusecases': 'All use cases',
  'nav.product': 'Product',
  'nav.marketing': 'Marketing',
  'nav.sales': 'Sales',
  'nav.about': 'About',
  'nav.cta': 'Strategy Call',
  'nav.home': 'Kadanco, home',
  'nav.menu': 'Menu',

  // light/dark toggle (button labels say what a click does)
  'theme.toDark': 'Switch to dark mode',
  'theme.toLight': 'Switch to light mode',

  // use-case labels, shared by nav and footer
  'uc.dach': 'DACH market entry',
  'uc.founder': 'Founder-led content',
  'uc.conversion': 'Conversion rebuild',
  'uc.events': 'Event pipeline',

  // language switcher
  'lang.label': 'Change language',

  // footer
  'footer.claim': 'Execution as a Service',
  'footer.tagline': 'One senior team across product, marketing and sales for B2B companies. We own the plan and run it ourselves.',
  'footer.head.usecases': 'Use cases',
  'footer.head.company': 'Company',
  'footer.head.resources': 'Resources',
  'footer.head.contact': 'Contact',
  'footer.imprint': 'Imprint',
  'footer.privacy': 'Privacy Policy',
  'footer.linkedin': 'Kadanco on LinkedIn',

  // contact modal
};

const de: Dict = {
  // nav
  'nav.glossary': 'Glossar',
  'nav.usecases': 'Use Cases',
  'nav.faq': 'FAQ',
  'nav.services': 'Leistungen',
  'nav.resources': 'Ressourcen',
  'nav.allusecases': 'Alle Use Cases',
  'nav.product': 'Produkt',
  'nav.marketing': 'Marketing',
  'nav.sales': 'Vertrieb',
  'nav.about': 'Über uns',
  'nav.cta': 'Strategiegespräch',
  'nav.home': 'Kadanco, Startseite',
  'nav.menu': 'Menü',

  // light/dark toggle
  'theme.toDark': 'Zum dunklen Modus wechseln',
  'theme.toLight': 'Zum hellen Modus wechseln',

  // use-case labels
  'uc.dach': 'DACH-Markteintritt',
  'uc.founder': 'Founder-Content',
  'uc.conversion': 'Website-Relaunch',
  'uc.events': 'Event-Pipeline',

  // language switcher
  'lang.label': 'Sprache wechseln',

  // footer
  'footer.claim': 'Execution as a Service',
  'footer.tagline': 'Ein erfahrenes Team für Produkt, Marketing und Vertrieb in B2B-Unternehmen. Wir verantworten den Plan und setzen ihn selbst um.',
  'footer.head.usecases': 'Use Cases',
  'footer.head.company': 'Unternehmen',
  'footer.head.resources': 'Ressourcen',
  'footer.head.contact': 'Kontakt',
  'footer.imprint': 'Impressum',
  'footer.privacy': 'Datenschutzerklärung',
  'footer.linkedin': 'Kadanco auf LinkedIn',

  // contact modal
};

export const ui: Partial<Record<Locale, Dict>> = { en, de };
