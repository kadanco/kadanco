// src/data/use-case-pages/types.ts
// Shape of one use case detail page (EN and DE), rendered by
// src/components/UseCaseDetail.astro. Layout follows the October use case
// designs in design/261021_Kadanco_Use_Cases/. Optional blocks
// (check, comparison, why, funnel, deliverables, also, outcomes, measures, ways, operator, timeline) only render when present.
import type { IsoIconName } from '../iso-icons';
import type { Dept } from '../use-cases';

// route comparison: the usual ways to solve the problem against three criteria,
// shown as route cards with a highlighted Kadanco card (own design, not the homepage matrix)
export type Mark = 'has' | 'part' | 'gap';
export interface ComparisonContent {
  eyebrow: string; h2a: string; h2b: string; lead: string; cols: string[]; solution: string;
  rows: { route: string; why: string; marks: Mark[] }[];
  kad: { route: string; why: string }; legend: { has: string; part: string; gap: string }; cap: string;
}

export interface UseCasePageText {
  meta: { title: string; description: string };
  crumb: string;                         // last breadcrumb item
  dept: string;                          // hero label, e.g. "Marketing · Market entry"
  h1a: string; h1b: string;              // headline, part 2 highlighted
  lead: string;
  ctaPrimary: string; ctaSecondary: string;
  ctaSecondaryHref?: string;             // e.g. '#deliverables': the second button scrolls instead of opening the contact form
  // self-check: statements to tick; the result depends on how many are ticked (0, 1 to 2, 3 or more)
  check?: { eyebrow: string; h2a: string; h2b: string; lede: string; items: string[];
    results: { none: { title: string; body: string }; some: { title: string; body: string }; many: { title: string; body: string; cta: string } } };
  // what you get, as tabs; key picks the small picture in DeliverableTabs.astro
  deliverables?: { eyebrow: string; h2a: string; h2b: string; lede: string;
    tabs: { key: 'audit' | 'screens' | 'prototype' | 'system' | 'code'; label: string; title: string; body: string; points: string[] }[] };
  // what we measure: the measures only, no invented numbers
  measures?: { eyebrow: string; h2a: string; h2b: string; lede: string; items: { title: string; body: string }[] };
  // ways to work: engagement options without prices (owner decision 2026-10-25)
  ways?: { eyebrow: string; h2a: string; h2b: string; options: { tag: string; title: string; length: string; body: string; points: string[]; cta: string }[] };
  situation: { eyebrow: string; h2a: string; h2b: string; lede: string; problem: string; solve: string };
  comparison?: ComparisonContent;
  why?: { eyebrow: string; h2a: string; h2b: string; items: { title: string; body: string }[] };   // reasons the problem persists
  funnel?: { eyebrow: string; h2a: string; h2b: string; stages: { label: string; leak?: string }[]; end: string };  // last stage is the goal
  inside: { eyebrow: string; h2: string; lede: string; steps: { label: string; title: string; body: string; points?: string[] }[] };  // points: shown on hover in the bento layout
  also?: { eyebrow: string; h2: string; items: { title: string; body: string }[]; tagsHead?: string; tags?: string[] };
  outcomes?: { eyebrow: string; h2: string; items: { big: string; text: string }[] };
  operator?: { eyebrow: string; h2a: string; h2b: string; body: string; link: string };
  timeline?: { eyebrow: string; h2a: string; h2b: string; steps: { n: string; title: string; amp?: string; body: string }[] };
  faq: { eyebrow: string; h2: string; items: { q: string; a: string }[] };
  cta: { h2a: string; h2b: string; lead: string; button: string };
}

export interface UseCasePage {
  id: string;
  dept: Dept;
  icon: IsoIconName;                     // hero visual
  heroVisual?: 'app';                    // 'app': a small app window drawing in place of the icon (Product department)
  // how "What's inside" shows the steps: stacked cards (default), widening row, mixed-size grid,
  // the product UI mock, or a contextual scene from StepsScene.astro
  stepsLayout?: 'stack' | 'expand' | 'bento' | 'ui' | 'web' | 'slider' | 'fan' | 'map' | 'board' | 'calendar' | 'sequence' | 'org';
  stepIcons: IsoIconName[];              // one per step, repeats if there are fewer
  en: UseCasePageText;
  de: UseCasePageText;
}
