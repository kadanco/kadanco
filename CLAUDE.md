# Kadanco Website: Project Context

Read this first in every session. Update the "Status" and "Decision log" sections at the end of each work session.

`docs/HANDOFF.md` is the short "where we stopped" file. A new chat starts with "Read docs/HANDOFF.md". At the end of every work session (or when the owner asks for a summary), update it: current state, latest commit, what waits on the owner, next steps, and one line in its session log. Keep its name fixed (exception to the timestamp rule, so the start prompt always works).

## What this is

- Marketing website for **Kadanco UG (haftungsbeschränkt)**, Berlin. Live at https://kadanco.com.
- Kadanco sells execution, not advice: one team across Product, Marketing and Sales for engineering-led B2B companies.
- Core message: the product works, but nobody can tell. Kadanco fixes the experience first, then runs marketing and sales on top.
- Languages: English at `/`, German at `/de/` (formal "Sie").

## Stack

- Astro 7, static output, plain HTML and CSS, no UI framework. Node 22 (`.nvmrc`).
- Hosting: Cloudflare Pages. Push to `main` deploys automatically (build `npm run build`, output `dist`).
- GitHub: `kadanco/kadanco`. Branch `main`. Old unmerged branches: `homepage-v2` (June), `cloudflare/workers-autoconfig`.
- Contact form: `functions/api/contact.js` (Cloudflare Pages Function) sends to Plunk. Secret `PLUNK_API_KEY`.
- Analytics: GTM `GTM-MF44PR8H` + CookieYes consent, wired in `src/layouts/Layout.astro`.
- Brand assets (logos, photos, OG image): R2 bucket at https://assets.kadanco.com.
- Motion: Anime.js from `public/vendor/anime.umd.min.js`.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # must pass before every commit
```

Internal pages (local and staging only, never on kadanco.com): http://localhost:4321/styleguide, /icons (animated icons), /components (every component, with a side menu). A build includes them when `CF_PAGES_BRANCH` is not `main` or `KADANCO_STAGING=1`.

## Repo map

```
src/layouts/Layout.astro    head, nav, footer, modal, global scripts, consent
src/components/             Nav, Footer, ContactModal, ComparisonMatrix,
                            UseCaseSpotlight, CadenceTimeline
src/pages/                  index, imprint, privacy-policy, glossary, use-cases (9 detail pages)
src/pages/de/               German versions
src/i18n/ui.ts              UI strings + translatedRoutes (controls DE sitemap/links)
src/data/glossary.json      251 glossary terms
src/data/use-case-pages/    one content file per use case detail page (EN and DE), rendered by src/components/UseCaseDetail.astro
src/data/use-cases.ts       all 9 use cases (EN and DE) with department tags, read by the homepage, nav, footer and /use-cases/
src/data/menus.ts           link groups (Services, Use Cases, Resources) shared by nav and footer
src/styles/tokens.css       brand tokens (--kd-*), the single source for all brand values
src/styles/global.css       shared components, maps working names onto tokens.css
src/dev/                    internal pages: /styleguide, /icons, /components (local and staging only, see INTERNAL_PAGES in astro.config.mjs)
src/data/iso-icons.ts       22 animated isometric icons from the designs; render with src/components/IsoIcon.astro
design/                     October 2026 design files (source of truth for new work)
docs/masterplan.md          group-wide plan for Kadanco and its brands (decisions D1 to D39)
docs/HANDOFF.md             session handoff: where we stopped, open items, next steps
```

## Design source of truth

October 2026 designs win over older code. Files in `design/`:

- `01_design-system/Kadanco_Brand_System-20261015-0848.html`: tokens and components. Its values live in code in `src/styles/tokens.css`.
- `02_pages/`: Home, Category Pages (3 service pages), Wireframes (12-page map).
- `03_docs/Kadanco_Category_Pages_Context-20261015-0843.md`: handoff notes, task list, security notes.
- `04_sections/`: section options to choose from (homepage heroes, concepts, use cases, glossary). View with `cd design/04_sections && python3 -m http.server 8000`.

The `design/` folder is not published (Astro only serves `public/` and `src/pages/`).

## Brand rules (locked)

- Font: Fira Sans. Weights 400 and 500 only. 800 only for the logo.
- Radius 5px on every element. Buttons and inputs 45px tall, 2px border.
- Labels uppercase, outlined or filled (the brand system allows both; the Home design uses filled).
- No glass effects. One exception: the nav keeps the original blurred, transparent look (owner decision, 2026-10-18).
- Headlines Title Case, two sentences split by a full stop. CTAs Title Case.
- Department colours: Product Blue #3B38DF, Marketing Lime #DAFF02 (dark-blue text, never a large background), Sales Lilac #B2B1FF, Accent/PLG #7270FF.
- Orange #FE572A is for the single main CTA only, on light grounds. On dark grounds (hero, nav, blue CTA bands) the CTA is lime with navy text (`.btn-lime`), as on the original site.
- Grounds: ink #201E1F, beige #F3F0EB / #E7E2D9 / #DCD5C8, navy #1A0175.
- Imagery: 3D isometric icons. Exception: the homepage use case cards use photos of real people (Unsplash License, self-hosted in `public/images/use-cases/`, credits in `docs/`).

## House rules

- New brand values go into `src/styles/tokens.css` first. Never hard-code a brand hex in a component; use a `--kd-*` token.

- No em dashes anywhere (copy, code comments, docs, commit messages).
- Plain words, no jargon, no AI-sounding words.
- Keep client scripts `is:inline`.
- Every new German page must be added to `translatedRoutes.de` in `src/i18n/ui.ts`.
- GDPR: self-host fonts (Google Fonts is a risk in Germany), consent before analytics, real Imprint and Privacy.

## Responsive rules (set on the homepage, 2026-10-24)

Every page must work from 360px to 1600px wide. Check at 360, 390, 768, 1024, 1280 and 1600.

- Breakpoints: 560px (phones), 880px (tablet: nav switches to the menu button, two-column splits stack), 980px (hero and wide two-column sections stack), 1200px (desktop). Use these; do not invent new ones (old 640, 820 and 900 rules were moved onto them on 2026-10-24).
- Side margin: `.container` uses `--gutter` (32px, 24px on phones). Anything that bleeds to the screen edge uses the same variable.
- Grid and flex columns that hold long unbreakable content (code, URLs) use `minmax(0, 1fr)`, or they widen past the screen. Clipped content (overflow hidden) does not show up in the overflow check, so look at the screenshots too.
- Sticky bars sit below the fixed 80px nav (`top: 80px`), have a solid ground (no glass) and stay compact on phones: one row of chips or links that scrolls sideways inside its own strip.
- Long lists on phones: shorten repeated text (for example two-line definitions) when the full text is one tap away.
- No sideways scrolling at any width. Hidden or absolutely placed elements (hover panels, tooltips) count: they must fit inside the screen or switch to an in-flow or overlay layout below the width where they fit.
- Section padding scales: `--pad` is `clamp(64px, 10vw, 120px)`. Use `.section` or that variable; no fixed 120px.
- When a split stacks, the heading and text come first, the visual or timeline after it.
- Phones (560px and below): hero buttons full width and stacked; big drawings stay under about half a screen; tables turn into rows where the text takes the full width and the marks sit underneath; badge or icon lists become compact rows (icon left, text right).
- Nav: no CTA in the bar at 880px and below; logo and menu button only.
- Moving rows (logo marquee) show at least three items on a phone; with reduced motion they become a tidy grid.
- Hover effects need a tap or focus equivalent, or must be pure decoration. Nothing important may be hover only.
- Test: the overflow and screenshot script used on 2026-10-24 (Playwright with the local Chrome) at the widths above, plus the reduced motion setting.

## Working with the owner

- Clarify before any multi-step task.
- Answers use bullets and numbered lists, with Bash commands for every step.
- The owner's terminal is always in the repo root.
- Deliver changes as files for the Downloads folder (usually a git patch), applied with `git am`.
- New files get a timestamp: `NAME-YYYYMMDD-HHMM` (Germany time). Exception: files whose name a tool requires (`CLAUDE.md`, `README.md`, Astro pages, configs).

## Status (17 October 2026)

Done:
- October design files added to `design/`.
- Sitewide style rules applied: 5px radius, 45px controls, weights 400/500, outlined labels.
- Missing `.dev.vars.example` added, em dash removed.
- `src/styles/tokens.css` added from the style guide; `global.css` reads from it.
- Dev-only style guide at `/styleguide`.
- Unused font weights (600, 700, 900) removed from the Google Fonts request.
- Homepage rebuilt to `design/02_pages/Kadanco_Home-20261015-0850.html` (EN and DE) in `src/components/HomePage.astro`. Old homepage backed up locally in `_local/accessdach/` for accessdach.com.
- Nav: original look (transparent, blur, white or ink text by the ground under it, logo swap, lime Let's Talk). Four items: Services, Use Cases and Resources as dropdowns, plus About; then EN / DE, one light/dark toggle icon, CTA. Footer on ink.
- Dark mode: theme role tokens (`--kd-bg`, `--kd-fg`, ...) in `tokens.css`. Only pages with `themeable` on `<Layout>` (the homepage) show the switch; all others stay light.
- Buttons: `.btn-primary` is blue, `.btn-cta` orange, `.btn-lime` for CTAs on dark grounds (hero, nav, CTA bands, older pages' heroes).
- Hero: text in `src/components/HomeHero.astro`, visual in `src/components/HomeHeroVisual.astro`: three isometric boards as slices, read top to bottom: 01 Product (app screen), 02 Marketing (content), 03 Sales (pipeline bars lying flat) in the style of the Conversion rebuild hero illustration, with the labels printed on each slice's top face and no legend.
- Use cases: all 7 in `src/data/use-cases.ts` (4 with detail pages, 3 case studies from the category designs, shown as problem and approach without the invented numbers). Homepage shows all 7; new overview page `/use-cases/` and `/de/use-cases/` with a department filter (wireframe 8). Footer links "All use cases".
- Homepage copy cleaned of the banned words and patterns in masterplan D29 (motions, compounds, system of action, "X, not Y").

Next, in order:
1. Homepage content: owner feedback round on the whole page. Offer cards open the contact modal until the category pages exist.
2. Colour pass on the remaining pages: beige grounds, dark mode support.
3. 3 category pages: Product Design, Product Marketing, Sales.
4. Done 2026-10-22: all 9 use cases have detail pages on `UseCaseDetail.astro` (EN and DE). Open: owner and Maria review of copy, real photos for the step image slots.
5. Glossary: add department filter.
6. Remaining pages from the 12-page wireframe.
7. Real photos (about 25 placeholders), replace invented metrics and quotes, working CTAs.
8. Security and GDPR review, then launch.

## Open questions

- Fonts still load from Google Fonts. Self-host before launch (GDPR).
- Everything else that is open lives in `docs/OPEN-TASKS-20261024-1053.md`.

## Decision log

- 2026-10-15: October designs win when code and designs conflict.
- 2026-10-15: Brand system file wins over the context notes: orange is CTA only, PLG is #7270FF.
- 2026-10-15: Design file names keep their original names inside `design/`.
- 2026-10-15: Homepage is the first build target.
- 2026-10-15: Style guide added as tokens in code plus a dev-only page. Not published, per the brand system security note.
- 2026-10-17: The October Home design supersedes all old homepage content and style. Hero from the Home design file (closes the hero question).
- 2026-10-17: Links and buttons follow the brand system styleguide: orange only for the main CTA (Get A Free Audit), blue primary, links 21px weight 500 with an arrow.
- 2026-10-17: The design's floating theme switch moved into the nav.
- 2026-10-17: Founders section keeps all content from the old homepage (Maria and Karan, photos, intro, tags); only the design follows the October system.
- 2026-10-17: Homepage order: hero, client logos, offers, use cases, who we are, FAQ, compliance, CTA. Logos, use cases, FAQ and compliance keep the old content in the October design.
- 2026-10-17: Step band ("With Kadanco you go one step further...") removed from the homepage.
- 2026-10-17: kadanco.com promotes the group's services under the Kadanco name. Brands are listed but never front and centre; they exist as dedicated sites for SEO, AEO and GEO. Recorded as D39 in `docs/masterplan.md`, which is the group-wide plan and should be read alongside this file.
- 2026-10-17: Hero visual: isometric service stack (Product foundation, Marketing, Sales on top) with a legend linking to the offer cards. Chosen from 3 stack versions after 6 mockup visuals were rejected.
- 2026-10-17: Voice rules from masterplan D29 apply to all site copy: no "X, not Y", no "rather than" as filler, no words from its banned list.
- 2026-10-17: Use cases: homepage plus an overview page. Case studies show problem and approach only, no invented results or quotes. Departments: DACH entry, founder content, conversion rebuild, feature list to clear offer = Marketing; event pipeline, pipeline off the founder = Sales; adoption rescue = Product.
- 2026-10-17: Use cases are always ordered Product, then Marketing, then Sales (the hero stack read from the foundation up). Enforced by a sort in `src/data/use-cases.ts`.
- 2026-10-18: Hero layout (superseded the same day: now 50/50, see below): text 34%, visual 66%. Height follows the window (`clamp(600px, 100svh - 150px, 820px)`) so the logo row stays visible without scrolling. Stacks below 980px.
- 2026-10-18: Who We Are and the final CTA restored exactly as live on main (`LiveFounders.astro`, `LiveCta.astro`): live copy, markup and look (10px radius, filled labels, lime CTA button), scoped to those sections. Deliberate exceptions to the October rules and D29 ("one system of action" stays because the owner asked for the exact live text). Live labels used weight 600, which is no longer loaded, so they render at 500.
- 2026-10-18: From the original site: hero background (blue radial gradient, no grid), lime CTAs on every dark ground, and the Compliance section restored exactly as live (`LiveCompliance.astro`).
- 2026-10-18: Nav back to the original design with the new content. Theme control is a single light/dark toggle (follows the system until clicked); language is a plain EN / DE. Colour switching reads the background under the nav, so it works in dark mode and on every page.
- 2026-10-18: No "engineering" in copy unless it is about software engineering. Services are Product Design, Product Marketing and Sales; "engineering-led companies" stays. Glossary not yet changed (see open questions).
- 2026-10-18: Hero visual remade as three isometric board slices in the Conversion rebuild illustration style (navy outlines, white faces, department-coloured tops). Legend removed; the offer cards below explain the services.
- 2026-10-18: Hero split is now 50/50. Slice labels sit inside the slices, flat on the top face along the front edge.
- 2026-10-18: Hero slices are interactive: hover, tap or keyboard focus turns a slice into a straight top-down view with its service text on the right; the other two fade back and keep floating. Without JavaScript the drawing stays static.
- 2026-10-18: Hero slices: no load animation, all three always float. On hover end the slice turns back to isometric the same way it turned, staying in front until settled; the float pauses during hover so it never jumps.
- 2026-10-18: Comparison back on the homepage in the live spot (after the logos): live content (4 routes x strategy, execution, ownership) in the October route matrix design with a highlighted Kadanco solution row (`HomeComparison.astro`). Sections with a light gradient need `data-theme="light"` so the nav picks dark text.
- 2026-10-18: Comparison copy is about outside help in general (agency, fractional CPO/CMO/CRO, freelancers, in-house hires) across product, marketing and sales. Headline: "Most Outside Help Sells Advice. The Work Stays With You."
- 2026-10-19: Hero boards turned a quarter in the isometric view so slice labels read upwards (bottom left to top right) along the front-right edge. The straight hover view is unchanged. Blocks are drawn back to front.
- 2026-10-19: Hero boards turned 45 degrees (owner request) instead of a quarter. The angle is one setting, `ANGLE` in `HomeHeroVisual.astro` (0 = labels on the front-left edge, 90 = front-right). At 45 the boards read as flat cards; 60 or 75 keep the 3D look with gently rising labels.
- 2026-10-19: Hero slices restored to the original orientation with labels on the front-left edge (reading top left to bottom right). The quarter turn, the 45 degree turn and the label alternatives (right edge, side tags, hover only) were tried and rejected.
- 2026-10-19: Gaps against the live homepage filled: "How We Work" (Map, Build, Ship & Improve) after Who We Are in `HomeSteps.astro`, rewritten for product, marketing and sales; "What you get" outcome lines back on the use case cards (`own` in `src/data/use-cases.ts`); scroll fade-ins extended to the new sections; nav links Use Cases, FAQ and Glossary back (hidden between 881 and 1180px, always in the mobile menu and footer).
- 2026-10-19: Nav is four items: Services (Product Design, Product Marketing, Sales), Use Cases (all 7 from `src/data/use-cases.ts` plus All use cases), Resources (Glossary, FAQ; blog posts later, add to `resources` in `Nav.astro`), About. Then language, light/dark, CTA. Mobile menu uses the same groups as accordions.
- 2026-10-19: How We Work uses the original How We Operate look (deep band, `CadenceTimeline` left, text right) with the new text. The "and it compounds" line under step 03 is removed.
- 2026-10-19: FAQ uses the live design (`LiveFaq.astro`: paper band, centred filled label, three-column white cards, 10px radius) with the new questions and answers from `HomePage.astro`.
- 2026-10-19: Footer columns match the nav: Services, Use Cases (all 7 plus All use cases), Resources (Glossary, FAQ), Company (About, email, LinkedIn). Both read `src/data/menus.ts`. Footer tagline now covers product, marketing and sales.
- 2026-10-19: Internal pages (/styleguide, /icons, /components) are built for local dev and every staging branch, never for main; noindex and out of the sitemap.
- 2026-10-19: Animated isometric icons from the designs on the site: nav dropdowns (36px, moving only while open), offer cards (layers, target, growth), use case cards (icon per use case in `src/data/use-cases.ts`). The same icon always means the same service or use case.
- 2026-10-20: Owner copy round 1 (Google Sheet, rows 2 to 81) applied to the English homepage: "Execution as a Service" positioning, hero "Stop Buying Management. Start Buying Execution.", nav CTA "Strategy Call", Marketing service renamed "Marketing & Positioning" (also in nav and footer). The hero's second button now opens the contact form. German not yet updated.
- 2026-10-20: Marketing-only wording replaced with product, marketing and sales across the site (EN and DE): use cases headline "What We Deliver. Across Product, Marketing And Sales.", three FAQ answers, the Who We Are bubble (owner approved changing the live text; "one system of action" is gone), the closing paragraph on all 4 use case pages, the DACH page description, llms.txt and llms-full.txt (Benelux removed). Contact form question: "What problem are you trying to solve?".
- 2026-10-20: Founder bios rewritten in third person (EN and DE). Maria: Senior Product Engineer & Design Director, strategic partner for B2B teams. Karan: B2B Go-to-Market & Outbound Lead, positioning and outbound (no hubsell mention, owner shortened it). Roles: "Founder · Product & Marketing" (Maria) and "Founder · Marketing & Sales" (Karan).
- 2026-10-20: Start time is "within two weeks" everywhere (hero, FAQ, How We Work, DACH page, EN and DE). The hero's "less than 1 week" and the DACH page's "14 days" were aligned.
- 2026-10-20: Who We Are and FAQ now switch to the dark theme colours in dark mode (night ground, navy cards, lilac accents). Light mode keeps the exact live look. Compliance (lime band) and the final CTA (blue band) stay as they are in both modes.
- 2026-10-20: Hero slices reordered to read 01, 02, 03 from top to bottom: Product on top, Marketing in the middle, Sales at the bottom. Drawing order and hover areas follow each slice's position. (Use cases keep the Product, Marketing, Sales order.)
- 2026-10-20: Homepage use cases rebuilt as stacked sticky cards from `design/261020_Kadanco_Website_with-detail-page` (`UseCaseStack.astro`): one large card per use case in its department colour, big animated icon on the right (image slot for photos later), 24px card radius by design (exception to the 5px rule). The previous grid lives on as `UseCaseGrid.astro`, shown on /components.
- 2026-10-21: Homepage use cases are three stacked department cards (`DeptStack.astro`): Product, Marketing, Sales, each listing 3 use cases with direct links (placeholders where fewer exist) and a CTA, with a stock photo of real people on the right. Equal card heights fix the awkward stacking; on phones the cards sit in a plain column. Founder-led content moved from Marketing to Sales. The one-card-per-use-case version is kept on /components.
- 2026-10-21: Nav dropdowns are text only (icons removed, too busy). Icons stay on the offer cards. "See All Use Cases" is centred.
- 2026-10-21: Use case detail pages are being rebuilt one at a time from `design/261021_Kadanco_Use_Cases/` (8 files) on a shared template, `UseCaseDetail.astro`, with one content file per case in `src/data/use-case-pages/`. Department colours drive the hero, step cards and CTA band. First: DACH market entry (new 3 moves; the route comparison, native operator and first 90 days sections from the old page kept, owner decision). Headlines in Title Case per our guide; "X, not Y" lines rewritten. Lime grounds set `data-nav-cta="dark"` so the nav CTA turns navy there.
- 2026-10-22: Services renamed: Product Design & Development, Digital Marketing & Branding, Sales Support & Systems (DE: Produktdesign & Entwicklung, Digitales Marketing & Branding, Vertriebsunterstützung & Systeme). Used in the nav, footer, offer cards, department cards and hero slices. Short department tags (Product, Marketing, Sales) stay on use case cards, filters and hero labels.
- 2026-10-22: Use cases framed as one go-to-market team: 9 cases, each led by one department and tagged with every department it involves (`depts` in `src/data/use-cases.ts`). Product: Product Design, Website Production, Software Modernisation. Marketing: DACH Market Entry, Content Production (founder content plus sales decks and one-pagers), Positioning and Messaging (corporate identity folded in). Sales: Outbound Sales Pipeline, Event Lead Generation, Account-Based Marketing. Dropped: PLG, Corporate Identity as its own case, "B2B" in names. Each case has a short name (menus, cards) and a tagline for the full name ("Product Design: UX, Onboarding and ...") in page titles and cards. The /use-cases/ filter shows a case under every department it touches. Homepage department cards list only the case names (the per-row department hints were removed, owner decision).
- 2026-10-22: URLs renamed with 301s in `public/_redirects` (EN and DE): conversion-rebuild to website-production, founder-led-content to content-production, event-pipeline to event-lead-generation. The moved pages keep their old layout until each is rebuilt on `UseCaseDetail.astro`. Software Modernisation and Account-Based Marketing have draft card text only (no design file yet).
- 2026-10-22: Homepage department cards show the photo on the left and the text on the right (owner request). Phones keep the photo on top.
- 2026-10-22: Hero intro (EN and DE): "Kadanco is Execution as a Service: senior operators with decades of field experience who plan and run your product, marketing and sales. Nothing gets delegated to juniors. Up and running within two weeks." (Option C from the owner review.)
- 2026-10-22: Website Production rebuilt on `UseCaseDetail.astro` (`src/data/use-case-pages/website-production.ts`, EN and DE): the design file (responsive, CMS, security, SEO, hosting) combined with the old Conversion rebuild page (story first, where the funnel leaks, lifecycle after the form, first 90 days), with website keywords from accelitymarketing.com/services/website as reference. Sales collateral moved to Content Production. The template gained two optional blocks, `funnel` (where visitors drop off) and `also` (extra cards plus a tag list), and light sections now alternate grounds automatically. Website icon is `assets` (`build` is a map pin and clashed with DACH).
- 2026-10-22: Marketing pillar finished on `UseCaseDetail.astro` (EN and DE). Content Production: 4 steps (voice and angle, founder LinkedIn, SEO and GEO articles, sales decks and one-pagers), the old "why founder content stalls" reasons, warmed outbound and CRM tracking as extras, first 90 days. Positioning and Messaging renamed Positioning and Brand (`/use-cases/positioning-and-brand/`, not live before, so no redirect): `clear-offer` plus `brand-design` design files, 4 steps (positioning, message and voice, visual identity, sales story), guidelines and asset library as extras. The template gained an optional `why` block (reasons cards), and `stepIcons` takes one icon per step. Pages are finished pillar by pillar: Marketing, then Product, then Sales.
- 2026-10-22: Product pillar finished on `UseCaseDetail.astro` (EN and DE). Product Design (`/use-cases/product-design/`, formerly Adoption Rescue): 4 steps, owner choice (UX and onboarding, UI design, design system, front-end handover), from `use-case-product-adoption.html` plus the phases on iam-mia.de; web design and brand from the design file are extras that point to their own use cases. Software Modernisation (`/use-cases/software-modernisation/`): no design file, drafted for owner review (audit, redesign, rebuild the front-end piece by piece, roll out next to the old system; route comparison against full rewrite, dev agency, internal team, leave it). All six Product and Marketing use cases now have detail pages.
- 2026-10-22: Sales pillar finished on `UseCaseDetail.astro` (EN and DE), so all 9 use cases have detail pages. Event Lead Generation: design file plus the old page (why events don't pay, 4 steps: scoring, pre-event ABM, dinners and roundtables, follow-up and ROI; "the runway" timeline). Outbound Sales Pipeline (`/use-cases/outbound-sales-pipeline/`): design file plus a Systems step (CRM, data, sequences) for the Sales Support & Systems service, and a route comparison (founder keeps selling, first SDR hire, lead gen agency, new sales tool). Account-Based Marketing (`/use-cases/account-based-marketing/`): no design file, drafted for owner review.
- 2026-10-22: Use case steps come in two layouts for variety (`stepsLayout` in the page data): stacked sticky cards (default) or expanding cards from the "Wähle deine Zahlungsart" row on klarna.com/de (screenshots in `design/Klarna example/`): equal image cards in one row; hover, keyboard focus or a tap widens one card, narrows the others and opens its panel with the step text. Our colours, 5px radius, solid panels (no glass). Phones and reduced motion get a plain column with all text visible. Expanding on Product Design, Software Modernisation, Content Production and Event Lead Generation; stacked on the other five.
- 2026-10-22: Use case steps now have four layouts (`stepsLayout`): `stack` (default; DACH, Website Production, Outbound), `expand` (Klarna row; Software Modernisation, Content Production, Event Lead Generation), `bento` (mixed-size grid; hover shrinks the image and opens a list of what the step includes from `points`; Positioning and Brand, ABM) and `ui` (Product Design only, `StepsProductUI.astro`: an app window whose regions are the steps, grey wireframe until hovered, then the finished design plus an inspector panel; CSS only with :has). Owner wants contextual step layouts per use case; ideas proposed for the others.
- 2026-10-23: Breadcrumbs removed sitewide (use case pages and glossary entries), owner decision.
- 2026-10-23: Every use case now shows its steps as a contextual scene (`StepsScene.astro`, set by `stepsLayout`): Website Production a website in a browser, Software Modernisation a before/after slider, Content Production a fan of content pieces, DACH a map of DE, AT and CH with pins, Positioning and Brand a brand board from sketch to final, Event Lead Generation a calendar around the event, Outbound a sequence from playbook to booked meeting, ABM target accounts and a buying group. Product Design keeps its UI mock. Scene and step list react to each other on hover, focus or tap; a small inline script keeps the last step active; without JavaScript all step texts show. The stack, expand and bento layouts stay available in the template for future pages.
- 2026-10-23: Owner component round: hero eyebrow "Execution as a Service" (EN and DE); Fractional row dropped from the homepage comparison, Solution tag on the right of the Kadanco row; compliance badges get a short line each; closing CTA "Tell us what you're trying to solve." with "objectives" in the lead; footer columns in two rows (Services and Use Cases on top, Use Cases list in two columns; Resources and Company below), "Execution as a Service" under the logo.
- 2026-10-23: Pages stay unique: the route matrix and the vertical How We Work timeline are homepage only. Use case pages show routes as cards with a navy Kadanco card, and the first 90 days as a horizontal numbered row.
- 2026-10-23: Hero label "End to End Go To Market", outlined like the use case hero labels. Services headline "One Team Across Your Entire Go To Market."
- 2026-10-23: No number for the team: "two operators", "the two of them" and similar removed sitewide (Who We Are headline is now "Operators That Take Ownership."), EN and DE, including llms.txt.
- 2026-10-23: Service cards show the hero's boards (`ServiceBoard.astro`) in place of the layers, target and growth icons. Board shapes live in `src/data/service-boards.ts`, shared with the hero, so the same picture always means the same service.
- 2026-10-24: No nav CTA on small screens (880px and below, where the menu button takes over): the bar shows only the logo and the menu. Every page has CTAs within one screen of scrolling. The line under the homepage logo row is removed.
- 2026-10-24: Homepage made responsive from 360 to 1600px; the rules are now in the "Responsive rules" section above and apply to every page.
- 2026-10-24: Responsive pass on the use case pages, /use-cases/ and the glossary: use case heroes put text first with full-width buttons on phones; the Product Design app mock fits phones; the glossary filter bar sits below the nav, has a solid ground and scrolls sideways in one row on tablets and phones (it covered two thirds of a phone screen); 24px side margins on phones; all breakpoints moved onto 560, 880, 980 and 1200.
- 2026-10-24: Logo `assets.kadanco.com/logo/wordmark-light.svg` is final. Old branches `homepage-v2` and `cloudflare/workers-autoconfig` deleted. Glossary "engineer" wording stays. Open tasks now live in `docs/OPEN-TASKS-20261024-1053.md`.
- 2026-10-24: Use case pages get a style per department: Product uses wireframes and UI; Marketing a bold PR and agency style; Sales dashboards and graphs. Worked one department at a time: Product, Marketing, Sales.
- 2026-10-24: Hero rule for use case pages: on laptops and up (1280x720 and larger) every hero has the same height (follows the screen height, at most 780px), never runs past the first screen and always shows the CTAs; the headline also scales with the screen height. Copy budget: headline about 50 characters (German 60), lead 160 to 200 (German up to 230). Product Design and Software Modernisation hero copy shortened (EN and DE; German for Maria to review).
- 2026-10-25: Product Design page rebuilt with ideas from valubyl.com (structure only; no copied claims, logos, metrics or testimonials): app window hero picture, hero button "See What You Get" scrolls to the deliverables; self-check with five statements (`SelfCheck.astro`); deliverables as five tabs with UI pictures (`DeliverableTabs.astro`), replacing the "Also included" tags; "What we measure" lists measures without numbers; "Ways to work" with two options (first-run sprint of 4, 8 or 12 weeks, product partnership), no prices; two new FAQs; new closing CTA. Work samples skipped for now. The new blocks are optional in `UseCaseDetail.astro`, so other pages can use them later.
- 2026-10-25: No ticker band (scrolling words) on the Product Design page, owner decision.
- 2026-10-25: Product Design round 2 (owner feedback): owner rewrote the hero and self-check copy (EN; German mirrored for Maria). Situation and first 90 days removed; "What you get" and "What's inside" merged into five step tabs that each end in a deliverable. Hero picture `heroVisual: 'morph'`: a cluttered app tidies into a clean one, then repeats (clean only with reduced motion). The self-check wireframe gets worse with each ticked statement (users leave, demo wall, help bubbles, mismatched cards, duplicate buttons, drifting layout). What we measure is a product dashboard with example curves (no figures, labelled as examples). New success stories block; three placeholders until real, approved stories exist. Situation, steps and outcomes are now optional in the template.
- 2026-10-25: Product Design hero picture (`HeroMorph.astro`): no navy box; a realistic app window as large as the old box. Before is cluttered (many CTAs, "?" and "!" hints, a banner, a tour pop-up, a chat bubble; nothing slanted), after is clean with one next step. The after state wipes in behind a lime line every 8 seconds; with reduced motion both show split in the middle.
- 2026-10-25: Product Design self-check: realistic flaws only (nothing slanted); every tick changes the text: the card shows what the latest ticked statement costs in revenue and in cost, and two bars (Revenue at risk, Added cost) grow by each statement's weight. Costs are words and relative bars, no figures. No CTA in this section.
