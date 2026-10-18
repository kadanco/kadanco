# Kadanco Website: Project Context

Read this first in every session. Update the "Status" and "Decision log" sections at the end of each work session.

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

Style guide: open http://localhost:4321/styleguide while `npm run dev` runs. Dev only, never built or deployed.

## Repo map

```
src/layouts/Layout.astro    head, nav, footer, modal, global scripts, consent
src/components/             Nav, Footer, ContactModal, ComparisonMatrix,
                            UseCaseSpotlight, CadenceTimeline
src/pages/                  index, imprint, privacy-policy, glossary, use-cases (4)
src/pages/de/               German versions
src/i18n/ui.ts              UI strings + translatedRoutes (controls DE sitemap/links)
src/data/glossary.json      251 glossary terms
src/data/use-cases.ts       all 7 use cases (EN and DE), read by the homepage and /use-cases/
src/styles/tokens.css       brand tokens (--kd-*), the single source for all brand values
src/styles/global.css       shared components, maps working names onto tokens.css
src/dev/styleguide.astro    dev-only style guide at /styleguide (injected in astro.config.mjs)
design/                     October 2026 design files (source of truth for new work)
docs/masterplan.md          group-wide plan for Kadanco and its brands (decisions D1 to D39)
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
- No glass effects.
- Headlines Title Case, two sentences split by a full stop. CTAs Title Case.
- Department colours: Product Blue #3B38DF, Marketing Lime #DAFF02 (dark-blue text, never a large background), Sales Lilac #B2B1FF, Accent/PLG #7270FF.
- Orange #FE572A is for the single main CTA only, on light grounds. On dark grounds (hero, nav, blue CTA bands) the CTA is lime with navy text (`.btn-lime`), as on the original site.
- Grounds: ink #201E1F, beige #F3F0EB / #E7E2D9 / #DCD5C8, navy #1A0175.
- Imagery: 3D isometric icons.

## House rules

- New brand values go into `src/styles/tokens.css` first. Never hard-code a brand hex in a component; use a `--kd-*` token.

- No em dashes anywhere (copy, code comments, docs, commit messages).
- Plain words, no jargon, no AI-sounding words.
- Keep client scripts `is:inline`.
- Every new German page must be added to `translatedRoutes.de` in `src/i18n/ui.ts`.
- GDPR: self-host fonts (Google Fonts is a risk in Germany), consent before analytics, real Imprint and Privacy.

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
- Nav rebuilt to the design: solid navy, Product / Marketing / Sales / About, EN / DE, Light / Auto / Dark switch, blue Let's Talk. Footer on ink.
- Dark mode: theme role tokens (`--kd-bg`, `--kd-fg`, ...) in `tokens.css`. Only pages with `themeable` on `<Layout>` (the homepage) show the switch; all others stay light.
- Buttons: `.btn-primary` is blue, `.btn-cta` orange, `.btn-lime` for CTAs on dark grounds (hero, nav, CTA bands, older pages' heroes).
- Hero: text in `src/components/HomeHero.astro`, visual in `src/components/HomeHeroVisual.astro` (isometric service stack: Product, Marketing, Sales).
- Use cases: all 7 in `src/data/use-cases.ts` (4 with detail pages, 3 case studies from the category designs, shown as problem and approach without the invented numbers). Homepage shows all 7; new overview page `/use-cases/` and `/de/use-cases/` with a department filter (wireframe 8). Footer links "All use cases".
- Homepage copy cleaned of the banned words and patterns in masterplan D29 (motions, compounds, system of action, "X, not Y").

Next, in order:
1. Homepage content: owner feedback round on the whole page. Offer cards open the contact modal until the category pages exist.
2. Colour pass on the remaining pages: beige grounds, dark mode support.
3. 3 category pages: Product Design Engineering, Product Marketing Engineering, Sales Engineering.
4. Update the 4 use case pages to the new designs (wireframe 9 detail template), and add detail pages for the 3 case studies once real results exist.
5. Glossary: add department filter.
6. Remaining pages from the 12-page wireframe.
7. Real photos (about 25 placeholders), replace invented metrics and quotes, working CTAs.
8. Security and GDPR review, then launch.

## Open questions

- Fonts still load from Google Fonts. Self-host before launch (GDPR).
- Missing docs mentioned in the context notes: `Kadanco_Chat_Summary_2026-10-10.md`, `Kadanco_Website_Blueprint_2026-10-12.md`, `Kadanco_Finanzen_Chat_Summary_2026-10-10.md`.
- Official logo asset (SVG) is still pending.
- Delete or merge the old branches `homepage-v2` and `cloudflare/workers-autoconfig`?

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
- 2026-10-18: Hero layout: text 34%, visual 66%. Height follows the window (`clamp(600px, 100svh - 150px, 820px)`) so the logo row stays visible without scrolling. Stacks below 980px.
- 2026-10-18: Who We Are and the final CTA restored exactly as live on main (`LiveFounders.astro`, `LiveCta.astro`): live copy, markup and look (10px radius, filled labels, lime CTA button), scoped to those sections. Deliberate exceptions to the October rules and D29 ("one system of action" stays because the owner asked for the exact live text). Live labels used weight 600, which is no longer loaded, so they render at 500.
- 2026-10-18: From the original site: hero background (blue radial gradient, no grid), lime CTAs on every dark ground, and the Compliance section restored exactly as live (`LiveCompliance.astro`).
