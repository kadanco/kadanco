# Kadanco Website: Session Handoff

Start a new chat with: "Read docs/HANDOFF.md". Claude updates this file at the end of every work session (rule in `CLAUDE.md`), so it always shows where we stopped.

Last updated: 28 October 2026, 18:15 (Germany time)

## Read first

1. `CLAUDE.md`: brand rules, house rules, responsive rules, working style and the full decision log. It is the long-term record; this file is the short "where are we now".
2. `docs/OPEN-TASKS-20261024-1053.md`: everything still open, including what waits on the owner.
3. `docs/masterplan.md`: group-wide plan (decisions D1 to D39), when copy or positioning is involved (voice rules D29).

## Where we stopped

- **Round in progress on branch `november-update`** (from `main` at `47d7ba9`; `main` = live = `473b427` plus the handoff doc). Latest commit `8ac6055`, pushed. Release later with a fast-forward merge into `main`, the same way as on 27 October (commands below). `october-update` can be deleted; ask the owner.
- **Check first: half of the German update is not committed.** `8ac6055` holds only `CLAUDE.md`, `docs/HANDOFF.md` and `HeroAccounts.astro`. The five page files in `src/data/use-case-pages/` and `src/components/UseCaseDetail.astro` were still uncommitted on 28 October, 18:15. If `git status` still shows them, commit them:
  ```bash
  git add src/components/UseCaseDetail.astro src/data/use-case-pages docs/HANDOFF.md
  git commit -m "German: Maria's approved text on the five use case pages (page files)"
  git push origin november-update
  ```
- **Round 1 of German (done in code):** Maria's approved German is applied. Source: `design/261028_KADANCO_Website_DE_IN_PROGRESS/KADANCO-Use-Cases-DE.xlsx`, the Sie column ("deploy"). Only German changed; English untouched (owner).
  - Done: Product Design, Content Production, Positioning and Brand, Account-Based Marketing, Outbound Sales Pipeline (page data in `src/data/use-case-pages/`, picture labels in `UseCaseDetail.astro` and `HeroAccounts.astro`).
  - Terms from the sheet's "Content Library" also applied on those five pages where the sheet has no row (meta text, step labels, self-check headings, picture labels): Macher → Gründer, Post → Beitrag, Account → Kundenkonto, Buying Center → Beschaffungsabteilung, "Kreuzen Sie alles an, was Ihnen bekannt vorkommt.", measures note "Beispieldaten, die ausschließlich zu Veranschaulichungszwecken dienen." and hint "Bewegen Sie den Mauszeiger über eine Kachel ...".
  - Kept as the sheet has it: "Plays" (ABM step 3, ways to work) and "Termine mit Buying Centern" (ABM measure); "Erfahrene Produkt-Gründer" (Product Design ways to work; the sheet notes it may become "Gründer"). Ask Maria.
  - ABM hero table: the column "Beschaffungsabteilung" breaks at a soft hyphen so it fits.
  - Checked: no sideways overflow at 360 to 1600 on the five German pages; laptop heroes 736px; all three builds pass.
- **Not covered by the sheets, still with the old terms (Macher, Account, Post, "Haken Sie an"):** homepage (`HomeHero`, `HomePage` FAQ, `LiveFounders`), Website Production, DACH Market Entry, Event Lead Generation, Software Modernisation (hidden), `use-cases.ts` (ABM card), `form-coach.ts`, `intakes.ts`. The homepage German in `KADANCO-Sie-Review.xlsx` is a full rewrite with status "Offen" and no corrections, so it is not applied.
- Sie/du: the site stays on Sie. The sheet's du column is kept for later; the site-wide choice is still open in the sheet.
- **Round 2 of German (with Maria now, nothing changed in code):** three CSV files in `design/261028_KADANCO_Website_DE_IN_PROGRESS/` (copies in the owner's Downloads). All are UTF-8 with commas.
  - `KADANCO-Terms-EN-DE-20261028-1504.csv`: 182 terms from the whole site (not the site glossary), 10 groups. Columns: English, proposed German, status (51 fixed in Maria's Content Library, 10 site decisions, 7 keep English, 114 proposed), German on the site now with counts, pages, an EN and DE example, note, and an empty "Maria's decision" column. Open conflicts to settle there: Macher (16 left), Account (9 left), "Haken Sie" vs "Kreuzen Sie", Inhalte vs Content, Designsystem vs Design-System, Plays vs Maßnahmen, Mandat vs Projekt, Junior-Team vs Nachwuchskräfte, the three versions of "end to end".
  - `KADANCO-Homepage-DE-Proposal-20261028-1453.csv`: 135 rows, every homepage text (incl. alt texts, screen reader labels, meta), English, proposed German, live German, Maria's review sheet (Offen), NEW/same, note. 44 rows change: the German homepage still follows older English in places, and some labels are English on the German page. The proposal does not take the review sheet blindly (it is machine-like in places and changes meaning in a few rows). Decisions noted in the file: Who We Are headline "Gründer, / die für Sie umsetzen.", hero label "Markteinführung aus einer Hand", "Use Cases" vs "Anwendungsfälle", the marketing card photo alt ("Kolleginnen"). English typo "Lets Talk" (final CTA label) left as it is.
  - `KADANCO-Product-Design-DE-Proposal-20261028-1522.csv`: 209 rows, same layout; 165 match Maria's approved sheet, 44 short picture labels and self-check headings are not in it; 7 changes proposed (share image alt, "Ziel: höher / niedriger", two self-check headings, "Ladezustand", "Bereit zum Zusammenführen").
  - Nav and footer are only in the homepage file. In the CSVs, " / " in a German cell marks the line break of a two-line headline (second line highlighted).
- **The other pages wait** (Website Production, Content Production, Positioning and Brand, ABM, Outbound, DACH, Event, forms): the owner is still perfecting their English. Make their CSVs only after that, with the same tools.
- **Tools** for all of this are in `_local/de-tools/` (README inside): extract every text of a built page in EN and DE, build the CSVs, compare a sheet with the code and apply replacements line by line.

## Working setup

- Repo: `/Users/karansharma/Coding/kadanco-website`. `main` deploys to kadanco.com (Cloudflare Pages). Every other branch builds a staging preview with the internal pages (/styleguide, /icons, /components).
- Before handing over commands, run `npm run build`, `KADANCO_STAGING=1 npm run build` and, before a release, `CF_PAGES_BRANCH=main npm run build` (no internal pages; form pages noindex and out of the sitemap).
- Never add a Co-Authored-By or any Claude line to commit messages.
- The owner commits, pushes and releases. Claude leaves changes in the working tree and gives short commands, one per line; chain the release with `&&` so it stops at the first error.
- Keep out of commits: the owner's `package.json` and `package-lock.json` changes (`@fontsource/fira-sans`), `design/261020_Kadanco_Website_with-detail-page/`, `design/Klarna example/`, `design/Forms & CTAs/`, `concepts/`, `_local/`. Commit only what changed, for example `git add CLAUDE.md docs src functions`.
- Do not use the images in `design/Sample images - Do not use them directly/` on the site (no licence).
- Visual checks: Playwright with the local Chrome (`/Applications/Google Chrome.app`), against `npx astro preview --port 4329`. Wait for `domcontentloaded`, not `networkidle` (the cookie banner never settles). Check widths 360, 390, 768, 1024, 1280 and 1600, sideways overflow over a few seconds (animations), and the layout-jump check: click every control and compare heights (rule in `CLAUDE.md`).

Release commands (used on 27 October):

```bash
git add CLAUDE.md docs src functions
git commit -m "..."
git push origin <branch>
git checkout main && git pull origin main && git merge --ff-only <branch> && git push origin main && git checkout <branch>
```

Rollback if a release breaks: Cloudflare Pages, Deployments, previous deployment, "Rollback to this deployment".

## What is live

- **Homepage** (EN and DE), signed off.
- **Use case pages** rebuilt on one template (`UseCaseDetail.astro`, data in `src/data/use-case-pages/`): hero, self-check (picture, six-step heading, one risk line), detailed steps with pictures (`StepsDetail.astro`), what we measure, ways to work, who does the work, FAQ, CTA. No route cards ("Your options") on use case pages.
  - **Product** style (wireframes and UI, blue hero): Product Design (`HeroMorph` slider), Website Production (`HeroBuild`, five stages Branded to Optimised, own /website-audit/).
  - **Marketing** style (editorial plus campaign wall, navy hero with lime accents, small tilts): Positioning and Brand (`HeroPasteup`, buzzword bingo, five clickable steps incl. Rollout, press clippings), Content Production (`HeroFanout`, stale LinkedIn feed, five clickable steps, press clippings). Example company "Plovra".
  - **Sales** style (dashboards and graphs, lilac hero, example figures tagged "Example data"): Account-Based Marketing (`HeroAccounts`, pipeline board, five clickable dashboard steps), Outbound Sales Pipeline (`HeroSequence`, pipeline dashboard, five clickable steps). Measures as a Sales dashboard.
  - **Old layout, footer only:** DACH Market Entry, Event Lead Generation. **Hidden:** Software Modernisation, /use-cases/.
- **Forms** (`AuditIntake.astro`, questions in `src/data/intakes.ts`, side panel in `src/data/form-coach.ts`): /strategy-call/, /ux-audit/, /website-audit/, /marketing-audit/, /pipeline-audit/ (EN and DE).
  - Themed by department; side panel per question (why we ask, insights, draft operator quotes, how we work, career logos); progress line; buttons under the question, aligned right; Skip on every question but the email; "Write a message instead"; close × top right.
  - Plunk events: `contact-form-submitted` (strategy call) and `<form>-submitted` for the audits, with every answer plus `brief`. Message-only submissions carry `mode: message` and `message`. Alerts and confirmations are set up in Plunk by the owner; texts in `docs/PLUNK-EMAILS-20261027-1315.md`.
- **CTAs:** only two kinds sitewide, an audit or "Book A Strategy Call".
- **No layout jumps:** every interactive part keeps its size in every state.

## Waiting on the owner (top items; full list in the open tasks file)

- Sign-off on the six rebuilt use case pages and the forms, including the claims (timelines, week tags, "From you" lines, CMS list, example figures).
- Approve the eight draft operator quotes in the form side panel and the facts "The audit is free", "You keep the findings", "We reply within one working day".
- Example company renamed from "Talio" (real HR company) to the invented "Plovra".
- Maria: review all German text (pages, pictures, forms, Plunk confirmations).
- Client testimonials, when available (slot ready in the form side panel).

## Next up

1. Commit the rest of the German update if still open (see "Check first" above), push, check staging.
2. When the owner brings Maria's term list back: read her "Maria's decision" column, record the final terms in `CLAUDE.md` (decision log), then apply them in the homepage and Product Design CSVs and in code. Ask the owner before applying terms to pages whose English is not final yet.
3. Apply the corrected homepage and Product Design CSVs to the code (German only), then run the three builds and the overflow check at 360 to 1600 (German runs longer).
4. When the owner's English for the other pages is final: make their CSVs with `_local/de-tools/`, then the same review loop with Maria.
5. Self-host the fonts (GDPR; the live site still loads Google Fonts) and update the privacy policy (form drafts kept in the browser, answers sent to Plunk).
6. Owner and Maria feedback on the live pages and forms.
7. Later: DACH Market Entry (Marketing style) and Event Lead Generation (Sales style).

## Session log (newest first, keep about 5)

- 2026-10-28: Branch `november-update`. Maria's approved German (Sie) applied to the five rebuilt use case pages, German only, with the sheet's terms (`8ac6055` plus uncommitted page files). Then three CSVs for Maria: site-wide term list, homepage proposal, Product Design proposal. Next chat starts when Maria's term list is back.
- 2026-10-27: Released to kadanco.com (`473b427`). Plunk set up by the owner (`docs/PLUNK-EMAILS-20261027-1315.md`). Forms: Skip and close ×, then Maria's review (buttons under the question aligned right, skip any question but the email, "Write a message instead"). Next round in a new branch.
- 2026-10-26 (late night): Sales style; Account-Based Marketing and Outbound Sales Pipeline rebuilt.
- 2026-10-26 (night): Layout jumps removed sitewide; forms themed by department with a coaching side panel.
- 2026-10-26 (evening): Content Production rebuilt and made clickable; only audit and strategy call CTAs; self-check simplified; route cards removed; Positioning and Brand gets Rollout and clickable pictures.
- 2026-10-26 (afternoon): Website Production rebuilt (hero that assembles itself, /website-audit/); Marketing style chosen; Positioning and Brand rebuilt.
- 2026-10-24 to 26: Homepage component round and sign-off; responsive rules; Product Design rebuilt as the template; contact modal replaced by full-screen form pages.
