// src/data/use-case-pages/types.ts
// Shape of one use case detail page (EN and DE), rendered by
// src/components/UseCaseDetail.astro. Layout follows the October use case
// designs in design/261021_Kadanco_Use_Cases/. Optional blocks
// (comparison, why, funnel, also, operator, timeline) only render when present.
import type { ComparisonContent } from '../../components/HomeComparison.astro';
import type { IsoIconName } from '../iso-icons';
import type { Dept } from '../use-cases';

export interface UseCasePageText {
  meta: { title: string; description: string };
  crumb: string;                         // last breadcrumb item
  dept: string;                          // hero label, e.g. "Marketing · Market entry"
  h1a: string; h1b: string;              // headline, part 2 highlighted
  lead: string;
  ctaPrimary: string; ctaSecondary: string;
  situation: { eyebrow: string; h2a: string; h2b: string; lede: string; problem: string; solve: string };
  comparison?: ComparisonContent;
  why?: { eyebrow: string; h2a: string; h2b: string; items: { title: string; body: string }[] };   // reasons the problem persists
  funnel?: { eyebrow: string; h2a: string; h2b: string; stages: { label: string; leak?: string }[]; end: string };  // last stage is the goal
  inside: { eyebrow: string; h2: string; lede: string; steps: { label: string; title: string; body: string; points?: string[] }[] };  // points: shown on hover in the bento layout
  also?: { eyebrow: string; h2: string; items: { title: string; body: string }[]; tagsHead?: string; tags?: string[] };
  outcomes: { eyebrow: string; h2: string; items: { big: string; text: string }[] };
  operator?: { eyebrow: string; h2a: string; h2b: string; body: string; link: string };
  timeline?: { eyebrow: string; h2a: string; h2b: string; steps: { n: string; title: string; amp?: string; body: string }[] };
  faq: { eyebrow: string; h2: string; items: { q: string; a: string }[] };
  cta: { h2a: string; h2b: string; lead: string; button: string };
}

export interface UseCasePage {
  id: string;
  dept: Dept;
  icon: IsoIconName;                     // hero visual
  stepsLayout?: 'stack' | 'expand' | 'bento' | 'ui';  // stacked cards (default), widening row, mixed-size grid, or the product UI mock
  stepIcons: IsoIconName[];              // one per step, repeats if there are fewer
  en: UseCasePageText;
  de: UseCasePageText;
}
