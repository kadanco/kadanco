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
src/styles/tokens.css       brand tokens (--kd-*), the single source for all brand values
src/styles/global.css       shared components, maps working names onto tokens.css
src/dev/styleguide.astro    dev-only style guide at /styleguide (injected in astro.config.mjs)
design/                     October 2026 design files (source of truth for new work)
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
- Orange #FE572A is for the single main CTA only.
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
- Buttons: `.btn-primary` is blue, `.btn-cta` orange. Older pages' hero and CTA band buttons show orange.

Next, in order:
1. Review the new homepage. Offer cards open the contact modal until the category pages exist.
2. Colour pass on the remaining pages: beige grounds, dark mode support.
3. 3 category pages: Product Design Engineering, Product Marketing Engineering, Sales Engineering.
4. Update the 4 use case pages to the new designs.
5. Glossary: add department filter.
6. Remaining pages from the 12-page wireframe.
7. Real photos (about 25 placeholders), replace invented metrics and quotes, working CTAs.
8. Security and GDPR review, then launch.

## Open questions

- Founder section shows only Maria Richter (per the design). Add Karan back?
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
