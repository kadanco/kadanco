# Kadanco Website: Session Handoff

Start a new chat with: "Read docs/HANDOFF.md". Claude updates this file at the end of every work session (rule in `CLAUDE.md`), so it always shows where we stopped.

Last updated: 26 October 2026, 15:00 (Germany time)

## Read first

1. `CLAUDE.md`: brand rules, house rules, responsive rules, working style and the full decision log. It is the long-term record; this file is the short "where are we now".
2. `docs/OPEN-TASKS-20261024-1053.md`: everything still open, including what waits on the owner.
3. `docs/masterplan.md`: group-wide plan (decisions D1 to D39), when copy or positioning is involved (voice rules D29).

## Working setup

- Repo: `/Users/karansharma/Coding/kadanco-website`. Work branch `october-update`; `main` deploys to kadanco.com.
- Push `october-update` to get a Cloudflare preview (staging). Internal pages (/styleguide, /icons, /components) only exist locally and on staging.
- Before handing over commands, run both `npm run build` and `KADANCO_STAGING=1 npm run build` (staging builds the internal pages; a local build skips them).
- Never add a Co-Authored-By or any Claude line to commit messages.
- The owner commits and pushes. Claude leaves changes in the working tree and gives short one-line commands (long lines break when pasted).
- Keep out of commits: the owner's `package.json` and `package-lock.json` changes (`@fontsource/fira-sans`), `design/261020_Kadanco_Website_with-detail-page/`, `design/Klarna example/`, `concepts/`, `_local/`.
- Do not use the images in `design/Sample images - Do not use them directly/` on the site (no licence).
- Visual checks: Playwright with the local Chrome (`/Applications/Google Chrome.app`), against `npx astro preview --port 4329`. Wait for `domcontentloaded`, not `networkidle` (the cookie banner never settles).

## Current state

Latest commit on `october-update`: `4206e18` Docs: handoff, status and open tasks. The Website Production rebuild (this session) is in the working tree, uncommitted until the owner commits it.

- **Homepage: done** (owner sign-off 2026-10-26).
- **Product Design: done.** It is the template for the other use case pages:
  - Product department style: wireframes and UI only.
  - Hero: before/after slider (`HeroMorph.astro`).
  - Self-check with worsening wireframe and revenue/cost bars (`SelfCheck.astro`).
  - "What you get" as five tall steps with equal-size pictures (`StepsDetail.astro`).
  - "What we measure" as a wireframe analytics app with hover/tap explanations (`MeasuresDash.astro`).
  - Ways to work; FAQ. Situation, first 90 days and success stories removed.
- **Website Production: built, waiting for owner review** (EN and DE; German for Maria):
  - Hero `HeroBuild.astro`: a website assembles itself in five stages (Branded, Conceptualised, Designed, Developed, Optimised), stage buttons under the window.
  - Self-check on a website wireframe; route cards; five steps with website pictures; website measures (incl. search rankings and AI answers); ways to work (sprint, partnership); FAQ incl. SEO, AEO and GEO.
  - Own form /website-audit/ (Plunk event `website-audit-submitted`).
- **Marketing style set; Positioning and Brand rebuilt in it** (EN and DE; German for Maria), waiting for owner review:
  - Navy hero with halftone and lime accents (no lime grounds), headline highlighter, pinned paper pieces with lime tape and small tilts. Example company "Talio".
  - Hero `HeroPasteup.astro` (billboard paste-up), buzzword bingo self-check, five campaign-style steps with clickable pictures (Rollout added), press clippings that turn over (`MeasuresPress.astro`), ways to work.
- **Content Production rebuilt in the Marketing style** (EN and DE), waiting for owner review: fan-out hero (`HeroFanout.astro`), stale LinkedIn feed self-check, five clickable campaign-style steps, press clipping measures.
- **Forms themed by department with a coaching side panel** (`src/data/form-coach.ts`), waiting for owner review; quotes are drafts.
- **No layout jumps:** every interactive picture and card keeps its size (rule in `CLAUDE.md`, Responsive rules).
- **Sales pages rebuilt** (ABM, Outbound) in the Sales style with example figures tagged "Example data", waiting for owner review.
- **Use case visibility** (`show` in `src/data/use-cases.ts`):
  - Nav and homepage cards: Product Design, Website Production, Content Production, Positioning and Brand, Account-Based Marketing, Outbound Sales Pipeline.
  - Footer only: DACH Market Entry, Event Lead Generation.
  - Hidden: Software Modernisation and the /use-cases/ overview (files prefixed with `_`).
- **Forms:** no modal. Every CTA links to a full-screen form page (`AuditIntake.astro`, content in `src/data/intakes.ts`, EN and DE, noindex):
  - /strategy-call/ (Plunk event `contact-form-submitted`)
  - /ux-audit/ (Product), /website-audit/ (Website Production), /marketing-audit/, /pipeline-audit/ (Sales), each with its own `*-submitted` event.
- **Department styles** (owner decision): Product = wireframes and UI; Marketing = bold PR and agency style; Sales = dashboards and graphs.
- **Hero rule:** on laptops and up every use case hero fits the first screen with the CTAs visible; headline about 50 characters (German 60), lead 160 to 200.

## Waiting on the owner (top items; full list in the open tasks file)

- Review the Website Production page (local or staging) and confirm its claims: CMS list, "homepage in 4 weeks, full site in 6 to 8", week tags.
- Plunk: notifications for `ux-audit-submitted`, `website-audit-submitted`, `marketing-audit-submitted`, `pipeline-audit-submitted` (before launch).
- Review the drafted Website, Marketing and Pipeline audit questions.
- Copy fixes from the review: self-check item 6, "get shortened", "Lets Talk", too-long page titles, Product Design meta description.

## Next up

1. Owner feedback on the rebuilt pages (Website Production, Positioning and Brand, Content Production, ABM, Outbound) and the forms.
2. Later, when the owner picks them up: DACH Market Entry (Marketing style; ideas agreed: English ad turning German hero, German buyer checklist) and Event Lead Generation (Sales style).

## Session log (newest first, keep about 5)

- 2026-10-27: Site released to main (owner). Plunk set up by the owner with the emails in `docs/PLUNK-EMAILS-20261027-1315.md`. Forms gained Skip (optional questions) and Cancel.
- 2026-10-26 (late night): Sales style set; Account-Based Marketing and Outbound Sales Pipeline rebuilt (dashboard heroes, pipeline self-checks, clickable dashboard steps, Sales measures).
- 2026-10-26 (night): Layout jumps removed sitewide; forms themed by department with a coaching side panel (why we ask, insights, draft operator quotes, facts, career logos).
- 2026-10-26 (evening, 5): Content Production step pictures made clickable.
- 2026-10-26 (evening, 4): Content Production rebuilt in the Marketing style.
- 2026-10-26 (evening, 3): Only audit and strategy call CTAs; sprint and discovery call buttons renamed.
- 2026-10-26 (evening, 2): Self-check simplified on all pages (six-step heading plus one risk line, no bars); brand card contrast fixed.
- 2026-10-26 (evening): Route cards removed from all use case pages; eyebrow rule removed; Positioning and Brand gets a fifth step (Rollout) and clickable step pictures.
- 2026-10-26 (late afternoon): Marketing style chosen (editorial plus campaign wall, navy hero, small tilts); Positioning and Brand rebuilt as the first Marketing page.
- 2026-10-26 (afternoon): Website Production rebuilt on the Product Design template (research: oratory.co, fletchpmm.com, loveatfirsttry.io, website topics only); hero that assembles itself; /website-audit/ form.
- 2026-10-24 to 26: Component round on the homepage (comparison, compliance, CTA, footer, Who We Are, tags, photos, card layout); responsive rules and pass on all pages; hero rule; use case visibility; Product Design rebuilt as the template; review fixed the CTA/modal bug; contact modal replaced by four full-screen form pages.
- 2026-10-23: Contextual step scenes for all use cases; breadcrumbs removed; handoff file created.
- 2026-10-22: Services renamed; 9 use cases with tags, new URLs and redirects; all 9 detail pages written (EN and DE); step layouts (stack, Klarna expand row, bento, product UI).
- 2026-10-21: Homepage use cases as three department cards with photos; DACH page rebuilt on the new template.
- 2026-10-20: Owner copy round 1 from the Google Sheet; founder bios; "within two weeks" everywhere; dark mode for Who We Are and FAQ.
