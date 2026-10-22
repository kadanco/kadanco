// src/data/use-cases.ts
//
// Every use case Kadanco shows, in one place. Read by the homepage Use Cases
// section and the /use-cases/ overview page, in English and German.
//
// Two kinds:
//   "page"  has its own detail page (href). Shows its workstreams.
//   "case"  a case study from the October category page designs. No detail
//           page yet. Shows the problem and what we do. The designs carried
//           invented results; those are left out until real, approved
//           numbers exist (masterplan: no invented metrics or quotes).
//
// Kadanco sells one go-to-market team, so most use cases touch more than one
// department. `depts` lists every department involved, lead first; `dept` is
// the lead and sets the colour: product (blue), marketing (lime), sales
// (lilac). Each department leads three use cases.
// `name` is the short name (nav, footer, cards); `tagline` completes the full
// name ("Product Design: UX, Onboarding and ...") for page titles and cards. The export is sorted Product, then Marketing, then Sales,
// the hero stack read from the foundation up. Within a department the order
// below is kept.
// Voice rules from masterplan D29 apply to every string.

import type { IsoIconName } from './iso-icons';

export type Dept = 'product' | 'marketing' | 'sales';

interface UseCaseText {
  eyebrow: string;
  name: string;
  tagline: string;
  summary: string;
  own?: string;           // what the client ends up with
  bundle?: string[];
  problem?: string;
  approach?: string;
}

export interface UseCase {
  id: string;
  dept: Dept;             // lead department, sets the colour
  depts: Dept[];          // every department involved, lead first
  kind: 'page' | 'case';
  href?: string; // English path; localized by the page
  featured?: boolean;
  icon: IsoIconName;       // animated icon, also used in the nav
  en: UseCaseText;
  de: UseCaseText;
}

const entries: UseCase[] = [
  // ---------- Product ----------
  {
    id: 'product-design',
    icon: 'board',
    dept: 'product',
    depts: ['product', 'marketing', 'sales'],
    kind: 'case',
    featured: true,
    en: {
      eyebrow: 'UX and design systems',
      name: 'Product Design',
      tagline: 'UX, Onboarding and a Design System Your Team Builds On',
      summary: 'A product that is easy to use, easy to demo and quick for your team to build on.',
      problem: 'A long setup meant every trial needed a sales call, and every new screen looked a little different because there was no shared library.',
      approach: 'We fix the UX and onboarding where users drop off, and build a design system with a component library as the single source of truth, so your developers ship consistent screens faster.',
    },
    de: {
      eyebrow: 'UX und Designsysteme',
      name: 'Produktdesign',
      tagline: 'UX, Onboarding und ein Designsystem, auf dem Ihr Team aufbaut',
      summary: 'Ein Produkt, das sich leicht nutzen und vorführen lässt und auf dem Ihr Team schnell weiterbaut.',
      problem: 'Die Einrichtung war so lang, dass jeder Test einen Vertriebstermin brauchte, und jeder neue Screen sah etwas anders aus, weil es keine gemeinsame Bibliothek gab.',
      approach: 'Wir verbessern UX und Onboarding dort, wo Nutzer abspringen, und bauen ein Designsystem mit Komponentenbibliothek als zentrale Quelle. So liefern Ihre Entwickler einheitliche Screens schneller.',
    },
  },
  {
    id: 'website-production',
    icon: 'build',
    dept: 'product',
    depts: ['product', 'marketing', 'sales'],
    kind: 'page',
    href: '/use-cases/website-production/',
    en: {
      eyebrow: 'Websites',
      name: 'Website Production',
      tagline: 'Design, Copy, Code and Hosting From One Team',
      summary: 'A new website built from scratch by one team, from the first sketch to hosting.',
      own: 'A website that matches the company you are today, written, designed, coded and hosted by one team, with a measured funnel you can keep improving.',
      bundle: ['Positioning for where you are now', 'Design and copy', 'Code, hosting and upkeep', 'Conversion tracking', 'Lifecycle & automation'],
    },
    de: {
      eyebrow: 'Websites',
      name: 'Website-Produktion',
      tagline: 'Design, Text, Code und Hosting aus einem Team',
      summary: 'Eine neue Website, von Grund auf von einem Team gebaut, vom ersten Entwurf bis zum Hosting.',
      own: 'Eine Website, die zum heutigen Unternehmen passt, von einem Team getextet, gestaltet, programmiert und gehostet, mit einem messbaren Funnel, den Sie laufend verbessern können.',
      bundle: ['Positionierung auf den Stand von heute', 'Design und Text', 'Code, Hosting und Pflege', 'Conversion-Tracking', 'Lifecycle & Automatisierung'],
    },
  },
  {
    id: 'software-modernisation',
    icon: 'seo',
    dept: 'product',
    depts: ['product', 'sales'],
    kind: 'case',
    en: {
      eyebrow: 'Legacy software',
      name: 'Software Modernisation',
      tagline: 'Renew Legacy Tools and Portals Without Starting Over',
      summary: 'Old internal tools and customer portals made fast, clear and easy to sell again.',
      problem: 'A customer portal and internal tools had grown for years. Customers needed training to use them, and sales avoided showing them in demos.',
      approach: 'We redesign the key journeys step by step on top of what already works, add a design system, and ship each part as soon as it is ready, without a risky full rebuild.',
    },
    de: {
      eyebrow: 'Bestandssoftware',
      name: 'Software-Modernisierung',
      tagline: 'Alte Tools und Portale erneuern, ohne bei null anzufangen',
      summary: 'Alte interne Tools und Kundenportale, die wieder schnell, klar und gut verkäuflich sind.',
      problem: 'Ein Kundenportal und interne Tools sind über Jahre gewachsen. Kunden brauchten eine Schulung, und der Vertrieb hat sie in Demos lieber nicht gezeigt.',
      approach: 'Wir gestalten die wichtigsten Abläufe Schritt für Schritt neu, auf dem, was schon funktioniert, ergänzen ein Designsystem und liefern jeden Teil aus, sobald er fertig ist. Ohne riskanten Komplett-Neubau.',
    },
  },
  // ---------- Marketing ----------
  {
    id: 'dach-market-entry',
    icon: 'pin',
    dept: 'marketing',
    depts: ['marketing', 'sales', 'product'],
    kind: 'page',
    href: '/use-cases/dach-market-entry/',
    en: {
      eyebrow: 'Market entry',
      name: 'DACH Market Entry',
      tagline: 'A German-Language Presence and Pipeline, Run End to End',
      summary: 'A German-language presence that grows every week, run end to end.',
      own: 'A German-language presence that gets stronger every week, your existing assets finally working in the market, and a pipeline your sales team does not have to run themselves.',
      bundle: ['Localised positioning', 'A German content engine', 'LinkedIn for the team', 'An events programme', 'Distribution that builds over time'],
    },
    de: {
      eyebrow: 'Markteintritt',
      name: 'DACH-Markteintritt',
      tagline: 'Deutschsprachige Präsenz und Pipeline, End-to-End betrieben',
      summary: 'Eine deutschsprachige Präsenz, die wächst, End-to-End betrieben.',
      own: 'Eine deutschsprachige Präsenz, die Woche für Woche stärker wird, Ihre bestehenden Assets, die endlich im Markt wirken, und eine Pipeline, die Ihr Vertrieb nicht selbst betreiben muss.',
      bundle: ['Lokalisierte Positionierung', 'Eine deutschsprachige Content-Produktion', 'LinkedIn für das Team', 'Ein Event-Programm', 'Distribution, die sich aufbaut'],
    },
  },
  {
    id: 'content-production',
    icon: 'posts',
    dept: 'marketing',
    depts: ['marketing', 'sales'],
    kind: 'page',
    href: '/use-cases/content-production/',
    en: {
      eyebrow: 'Content',
      name: 'Content Production',
      tagline: 'Founder-Led LinkedIn, Articles, Sales Decks and One-Pagers',
      summary: "Content in the founder's voice plus the decks and one-pagers your sales team uses, made by one team.",
      own: "A steady publishing schedule in the founder's voice, and sales decks and one-pagers that tell the same story, all feeding pipeline you can measure.",
      bundle: ['Messaging & positioning', 'Ghostwriting & LinkedIn', 'Articles, SEO & GEO', 'Sales decks & one-pagers', 'Tracking what converts'],
    },
    de: {
      eyebrow: 'Content',
      name: 'Content-Produktion',
      tagline: 'Founder-Content auf LinkedIn, Artikel, Sales-Decks und One-Pager',
      summary: 'Content in der Stimme der Gründer, dazu die Decks und One-Pager, mit denen Ihr Vertrieb arbeitet, aus einem Team.',
      own: 'Ein verlässlicher Publishing-Plan in Ihrer Stimme und Sales-Decks und One-Pager, die dieselbe Geschichte erzählen. Alles zahlt auf messbare Pipeline ein.',
      bundle: ['Messaging & Positionierung', 'Ghostwriting & LinkedIn', 'Artikel, SEO & GEO', 'Sales-Decks & One-Pager', 'Messen, was konvertiert'],
    },
  },
  {
    id: 'positioning-and-messaging',
    icon: 'score',
    dept: 'marketing',
    depts: ['marketing', 'product', 'sales'],
    kind: 'case',
    en: {
      eyebrow: 'Positioning',
      name: 'Positioning and Messaging',
      tagline: 'A Clear Offer Buyers Understand in Five Seconds',
      summary: 'A site and sales story built around the outcome buyers pay for.',
      problem: 'The site listed features, and buyers could not tell the product apart from its rivals.',
      approach: 'We repositioned the product around one buyer outcome and rebuilt the homepage, the sales deck and a comparison page, with a corporate identity to match.',
    },
    de: {
      eyebrow: 'Positionierung',
      name: 'Positionierung und Messaging',
      tagline: 'Ein klares Angebot, das Käufer in fünf Sekunden verstehen',
      summary: 'Website und Vertriebsstory rund um das Ergebnis, für das Käufer bezahlen.',
      problem: 'Die Website hat Features aufgezählt, und Käufer konnten das Produkt nicht vom Wettbewerb unterscheiden.',
      approach: 'Wir haben das Produkt auf ein Käuferergebnis ausgerichtet und die Startseite, das Sales-Deck und eine Vergleichsseite neu gebaut, mit einem passenden Corporate Design.',
    },
  },
  // ---------- Sales ----------
  {
    id: 'outbound-sales-pipeline',
    icon: 'plane',
    dept: 'sales',
    depts: ['sales', 'marketing'],
    kind: 'case',
    en: {
      eyebrow: 'Outbound',
      name: 'Outbound Sales Pipeline',
      tagline: 'Qualified Meetings Without the Founder in Every Deal',
      summary: 'A sales process that books meetings without the founder in every deal.',
      problem: 'Every deal ran through one founder, so pipeline stalled whenever they were busy.',
      approach: 'We built a target list, first-touch openers, the CRM and sequences behind them, and a clear path from qualified lead to handoff.',
    },
    de: {
      eyebrow: 'Outbound',
      name: 'Outbound-Vertriebspipeline',
      tagline: 'Qualifizierte Termine, ohne dass die Gründer an jedem Deal sitzen',
      summary: 'Ein Vertriebsprozess, der Termine bucht, ohne dass die Gründer an jedem Deal sitzen.',
      problem: 'Jeder Deal lief über eine Gründerperson. War sie beschäftigt, stand die Pipeline still.',
      approach: 'Wir haben eine Zielliste, Erstansprachen, das CRM und die Sequenzen dahinter und einen klaren Weg vom qualifizierten Lead bis zur Übergabe aufgebaut.',
    },
  },
  {
    id: 'event-lead-generation',
    icon: 'stage',
    dept: 'sales',
    depts: ['sales', 'marketing'],
    kind: 'page',
    href: '/use-cases/event-lead-generation/',
    en: {
      eyebrow: 'Events',
      name: 'Event Lead Generation',
      tagline: 'Meetings Booked Before the Event, ROI Within 30 Days',
      summary: 'Scored events, pre-event ABM, and CFO-grade ROI in 30 days.',
      own: 'Attendees who know you before they walk in, meetings booked into a held calendar, and a CFO-grade ROI report within 30 days with every meeting tagged.',
      bundle: ['Events scored by ICP overlap and persona density', 'LinkedIn & Meta ABM from four weeks out, with calendar holds', 'Hosted dinners and roundtables where deals close', 'Same-day enrichment, CRM sync and sequenced follow-up'],
    },
    de: {
      eyebrow: 'Events',
      name: 'Event-Leadgenerierung',
      tagline: 'Termine vor dem Event gebucht, ROI innerhalb von 30 Tagen',
      summary: 'Bewertete Events, ABM vor dem Event und ein ROI-Report in 30 Tagen.',
      own: 'Teilnehmer, die Sie kennen, bevor sie den Raum betreten, Termine in einem gefüllten Kalender und ein ROI-Report innerhalb von 30 Tagen, in dem jeder Termin zugeordnet ist.',
      bundle: ['Events, bewertet nach ICP-Überschneidung und Personendichte', 'LinkedIn- und Meta-ABM ab vier Wochen vorher, mit Kalender-Slots', 'Dinners und Roundtables, auf denen Deals entstehen', 'Anreicherung am selben Tag, CRM-Sync und sequenziertes Follow-up'],
    },
  },
  {
    id: 'account-based-marketing',
    icon: 'network',
    dept: 'sales',
    depts: ['sales', 'marketing', 'product'],
    kind: 'case',
    en: {
      eyebrow: 'Target accounts',
      name: 'Account-Based Marketing',
      tagline: 'Campaigns and Outreach Aimed at Your Target Accounts',
      summary: 'Ads, content and outreach focused on the few accounts you most want to win.',
      problem: 'Broad campaigns brought in leads that never fit, while the accounts that mattered most never heard from the company.',
      approach: 'We pick the target accounts with you, map the buying group, and run ads, tailored pages and outreach to each account until meetings are booked.',
    },
    de: {
      eyebrow: 'Zielaccounts',
      name: 'Account-Based Marketing',
      tagline: 'Kampagnen und Ansprache für Ihre Zielaccounts',
      summary: 'Anzeigen, Content und Ansprache, gebündelt auf die wenigen Accounts, die Sie am meisten gewinnen wollen.',
      problem: 'Breite Kampagnen brachten Leads, die nie gepasst haben, und die wichtigsten Accounts haben nie vom Unternehmen gehört.',
      approach: 'Wir wählen die Zielaccounts mit Ihnen aus, bilden das Buying Center ab und spielen Anzeigen, eigene Landingpages und Ansprache pro Account aus, bis Termine stehen.',
    },
  },
];

const deptOrder: Dept[] = ['product', 'marketing', 'sales'];

// Array.prototype.sort is stable, so entries keep their order within a department.
export const useCases: UseCase[] = [...entries].sort((a, b) => deptOrder.indexOf(a.dept) - deptOrder.indexOf(b.dept));
