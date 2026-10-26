// src/data/use-case-pages/types.ts
// Shape of one use case detail page (EN and DE), rendered by
// src/components/UseCaseDetail.astro. Layout follows the October use case
// designs in design/261021_Kadanco_Use_Cases/. Optional blocks
// (check, situation, comparison, why, funnel, deliverables, inside, also, outcomes, measures, ways, operator, timeline, stories) only render when present.
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
  // self-check: statements to tick. Beside them a card with a picture that gets worse with every tick,
  // a heading that moves on with the number ticked (levels: 0 to 6) and one line: the risk of the
  // statement ticked last (hint when none is ticked). No bars, no figures, no CTA (owner, 2026-10-26).
  check?: { eyebrow: string; h2a: string; h2b: string; lede: string;
    items: { text: string; risk: string }[];
    levels: string[]; hint: string };
  // what you get: tabs (DeliverableTabs.astro) or, with layout 'steps', one tall row per step with its own
  // picture and full detail (StepsDetail.astro). key picks the picture.
  deliverables?: { eyebrow: string; h2a: string; h2b: string; lede: string; layout?: 'tabs' | 'steps';
    tabs: { key: 'audit' | 'screens' | 'prototype' | 'system' | 'code' | 'brand' | 'concept' | 'design' | 'develop' | 'optimise' | 'map' | 'message' | 'identity' | 'story' | 'rollout' | 'voice' | 'linkedin' | 'articles' | 'collateral' | 'pipeline' | 'accounts' | 'group' | 'plays' | 'signals' | 'report' | 'playbook' | 'crm' | 'outreach' | 'enable' | 'weekly'; label: string; title: string; body: string; points: string[];
      when?: string; doing?: string[]; you?: string }[];
    cta?: { h3: string; body: string; button: string } };
  // what we measure: the measures only, no invented numbers
  // dir: which way the number should move; drawn as a small chart that improves after the start line
  measures?: { eyebrow: string; h2a: string; h2b: string; lede: string; app?: string; items: { title: string; body: string; dir?: 'up' | 'down'; viz?: 'funnel' | 'path' | 'columns' | 'inbox' | 'build' | 'speed' | 'rank' | 'answers' | 'threads'; kpi?: string; change?: string; cause?: string }[] };  // kpi: an example figure, Sales pages only, always shown with an "Example data" tag  // viz: picture in MeasuresDash.astro (defaults by order); change and cause show on hover, focus or tap
  // success stories: one card per client story. Until real stories are approved the
  // entries are placeholders and say so (placeholder: true shows a "Placeholder" tag)
  stories?: { eyebrow: string; h2a: string; h2b: string; lede: string;
    items: { client: string; industry: string; challenge: string; work: string; result: string; quote?: string; who?: string; placeholder?: boolean }[] };
  // ways to work: engagement options without prices (owner decision 2026-10-25)
  ways?: { eyebrow: string; h2a: string; h2b: string; options: { tag: string; title: string; length: string; body: string; points: string[]; cta: string }[] };
  situation?: { eyebrow: string; h2a: string; h2b: string; lede: string; problem: string; solve: string };
  comparison?: ComparisonContent;
  why?: { eyebrow: string; h2a: string; h2b: string; items: { title: string; body: string }[] };   // reasons the problem persists
  funnel?: { eyebrow: string; h2a: string; h2b: string; stages: { label: string; leak?: string }[]; end: string };  // last stage is the goal
  inside?: { eyebrow: string; h2: string; lede: string; steps: { label: string; title: string; body: string; points?: string[] }[] };  // points: shown on hover in the bento layout
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
  heroVisual?: 'app' | 'morph' | 'build' | 'pasteup' | 'fanout' | 'accounts' | 'sequence'; // 'app': a small app window; 'morph': a cluttered app turning into a clean one; 'build': a website that assembles itself, stage by stage (HeroBuild.astro); 'pasteup': a billboard pasted over with a sharp message (HeroPasteup.astro, Marketing); 'fanout': one insight fanning out into four pieces (HeroFanout.astro, Marketing); 'accounts': target accounts heating up in a dashboard (HeroAccounts.astro, Sales); 'sequence': an outbound sequence running into booked meetings (HeroSequence.astro, Sales)
  checkVisual?: 'app' | 'site' | 'bingo' | 'feed' | 'board' | 'pipe'; // the self-check picture: an app (default), a website in a browser, a buzzword bingo card or a LinkedIn feed (Marketing), a sales pipeline board or a pipeline dashboard (Sales)
  measuresVisual?: 'dash' | 'press';     // what we measure: a wireframe analytics app (default, Product) or press clippings (MeasuresPress.astro, Marketing)
  audit?: string;                        // audit intake page for this use case, when it differs from the department's (e.g. '/website-audit/')
  // how "What's inside" shows the steps: stacked cards (default), widening row, mixed-size grid,
  // the product UI mock, or a contextual scene from StepsScene.astro
  stepsLayout?: 'stack' | 'expand' | 'bento' | 'ui' | 'web' | 'slider' | 'fan' | 'map' | 'board' | 'calendar' | 'sequence' | 'org';
  stepIcons: IsoIconName[];              // one per step, repeats if there are fewer
  en: UseCasePageText;
  de: UseCasePageText;
}
