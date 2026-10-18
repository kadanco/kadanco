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
// dept matches the department colours: product (blue), marketing (lime),
// sales (lilac). The export is sorted Product, then Marketing, then Sales,
// the hero stack read from the foundation up. Within a department the order
// below is kept.
// Voice rules from masterplan D29 apply to every string.

export type Dept = 'product' | 'marketing' | 'sales';

interface UseCaseText {
  eyebrow: string;
  name: string;
  summary: string;
  bundle?: string[];
  problem?: string;
  approach?: string;
}

export interface UseCase {
  id: string;
  dept: Dept;
  kind: 'page' | 'case';
  href?: string; // English path; localized by the page
  featured?: boolean;
  en: UseCaseText;
  de: UseCaseText;
}

const entries: UseCase[] = [
  {
    id: 'adoption-rescue',
    dept: 'product',
    kind: 'case',
    featured: true,
    en: {
      eyebrow: 'Product adoption',
      name: 'Adoption Rescue',
      summary: 'A first run that gets new users to value on their own.',
      problem: 'A long setup meant every trial needed a sales call, and many users left before they saw any value.',
      approach: 'We rebuilt the first run as a guided three-step path, so users reach their first result without help.',
    },
    de: {
      eyebrow: 'Produktnutzung',
      name: 'Adoption Rescue',
      summary: 'Ein Einstieg, der neue Nutzer ohne Hilfe zum ersten Ergebnis bringt.',
      problem: 'Die Einrichtung war so lang, dass jeder Test einen Vertriebstermin brauchte. Viele Nutzer sind gegangen, bevor sie einen Nutzen gesehen haben.',
      approach: 'Wir haben den Einstieg als geführten Weg in drei Schritten neu gebaut. Nutzer kommen so ohne Hilfe zu ihrem ersten Ergebnis.',
    },
  },
  {
    id: 'feature-list-to-clear-offer',
    dept: 'marketing',
    kind: 'case',
    en: {
      eyebrow: 'Positioning',
      name: 'From Feature List To Clear Offer',
      summary: 'A site and sales story built around the outcome buyers pay for.',
      problem: 'The site listed features, and buyers could not tell the product apart from its rivals.',
      approach: 'We repositioned the product around one buyer outcome and rebuilt the homepage, the sales deck and a comparison page.',
    },
    de: {
      eyebrow: 'Positionierung',
      name: 'Von der Feature-Liste zum klaren Angebot',
      summary: 'Website und Vertriebsstory rund um das Ergebnis, für das Käufer bezahlen.',
      problem: 'Die Website hat Features aufgezählt, und Käufer konnten das Produkt nicht vom Wettbewerb unterscheiden.',
      approach: 'Wir haben das Produkt auf ein Käuferergebnis ausgerichtet und die Startseite, das Sales-Deck und eine Vergleichsseite neu gebaut.',
    },
  },
  {
    id: 'dach-market-entry',
    dept: 'marketing',
    kind: 'page',
    href: '/use-cases/dach-market-entry/',
    en: {
      eyebrow: 'Market entry',
      name: 'DACH market entry',
      summary: 'A German-language presence that grows every week, run end to end.',
      bundle: ['Localised positioning', 'A German content engine', 'LinkedIn for the team', 'An events programme', 'Distribution that builds over time'],
    },
    de: {
      eyebrow: 'Markteintritt',
      name: 'DACH-Markteintritt',
      summary: 'Eine deutschsprachige Präsenz, die wächst, End-to-End betrieben.',
      bundle: ['Lokalisierte Positionierung', 'Eine deutschsprachige Content-Produktion', 'LinkedIn für das Team', 'Ein Event-Programm', 'Distribution, die sich aufbaut'],
    },
  },
  {
    id: 'founder-led-content',
    dept: 'marketing',
    kind: 'page',
    href: '/use-cases/founder-led-content/',
    en: {
      eyebrow: 'Founder content',
      name: 'Founder-led content & pipeline',
      summary: "A regular publishing schedule in the founder's voice, feeding measurable pipeline.",
      bundle: ['Messaging & positioning', 'Ghostwriting & content', 'SEO & GEO', 'Outbound warmed by the content', 'RevOps to track what converts'],
    },
    de: {
      eyebrow: 'Founder-Content',
      name: 'Founder-Content & Pipeline',
      summary: 'Ein Publishing-Programm in der Stimme der Gründer, das messbare Pipeline erzeugt.',
      bundle: ['Messaging & Positionierung', 'Ghostwriting & Content', 'SEO & GEO', 'Outbound, vorgewärmt durch Content', 'RevOps, um Conversions zu messen'],
    },
  },
  {
    id: 'conversion-rebuild',
    dept: 'marketing',
    kind: 'page',
    href: '/use-cases/conversion-rebuild/',
    en: {
      eyebrow: 'Conversion',
      name: 'Rebuild that lifts conversion',
      summary: 'A site and message that match where the company actually is now.',
      bundle: ['Repositioning around where you are now', 'Brand & website rebuild', 'Sales collateral', 'Conversion-rate optimisation', 'Lifecycle & automation'],
    },
    de: {
      eyebrow: 'Conversion',
      name: 'Relaunch, der die Conversion hebt',
      summary: 'Eine Website und eine Botschaft, die zum heutigen Unternehmen passen.',
      bundle: ['Neupositionierung auf den Stand von heute', 'Marken- und Website-Relaunch', 'Vertriebsunterlagen', 'Conversion-Optimierung', 'Lifecycle & Automatisierung'],
    },
  },
  {
    id: 'pipeline-off-the-founder',
    dept: 'sales',
    kind: 'case',
    en: {
      eyebrow: 'Founder-led sales',
      name: 'Pipeline Off The Founder',
      summary: 'A sales process that books meetings without the founder in every deal.',
      problem: 'Every deal ran through one founder, so pipeline stalled whenever they were busy.',
      approach: 'We built a target list, first-touch openers and a clear path from qualified lead to handoff.',
    },
    de: {
      eyebrow: 'Gründergeführter Vertrieb',
      name: 'Pipeline ohne Gründer',
      summary: 'Ein Vertriebsprozess, der Termine bucht, ohne dass der Gründer an jedem Deal sitzt.',
      problem: 'Jeder Deal lief über eine Gründerperson. War sie beschäftigt, stand die Pipeline still.',
      approach: 'Wir haben eine Zielliste, Erstansprachen und einen klaren Weg vom qualifizierten Lead bis zur Übergabe aufgebaut.',
    },
  },
  {
    id: 'event-pipeline',
    dept: 'sales',
    kind: 'page',
    href: '/use-cases/event-pipeline/',
    en: {
      eyebrow: 'Events',
      name: 'Event pipeline',
      summary: 'Scored events, pre-event ABM, and CFO-grade ROI in 30 days.',
      bundle: ['Events scored by ICP overlap and persona density', 'LinkedIn & Meta ABM from four weeks out, with calendar holds', 'Hosted dinners and roundtables where deals close', 'Same-day enrichment, CRM sync and sequenced follow-up'],
    },
    de: {
      eyebrow: 'Events',
      name: 'Event-Pipeline',
      summary: 'Bewertete Events, ABM vor dem Event und ein ROI-Report in 30 Tagen.',
      bundle: ['Events, bewertet nach ICP-Überschneidung und Personendichte', 'LinkedIn- und Meta-ABM ab vier Wochen vorher, mit Kalender-Slots', 'Dinners und Roundtables, auf denen Deals entstehen', 'Anreicherung am selben Tag, CRM-Sync und sequenziertes Follow-up'],
    },
  },
];

const deptOrder: Dept[] = ['product', 'marketing', 'sales'];

// Array.prototype.sort is stable, so entries keep their order within a department.
export const useCases: UseCase[] = [...entries].sort((a, b) => deptOrder.indexOf(a.dept) - deptOrder.indexOf(b.dept));
