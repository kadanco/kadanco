# Kadanco Website: Session Handoff

Start a new chat with: "Read docs/HANDOFF.md". Claude updates this file at the end of every work session (rule in `CLAUDE.md`), so it always shows where we stopped.

Last updated: 27 October 2026, 14:13 (Germany time)

## Read first

1. `CLAUDE.md`: brand rules, house rules, responsive rules, working style and the full decision log. It is the long-term record; this file is the short "where are we now".
2. `docs/OPEN-TASKS-20261024-1053.md`: everything still open, including what waits on the owner.
3. `docs/masterplan.md`: group-wide plan (decisions D1 to D39), when copy or positioning is involved (voice rules D29).

## Where we stopped

- **The `october-update` round is finished and live.** Released to kadanco.com on 27 October 2026. `main` and `october-update` both point at `473b427` ("Forms: buttons under the question, skip any question, write a message instead, close ×").
- **The next round of updates happens in a new branch from `main`** (owner decision). Agree the name at the start of the next chat (for example `november-update`), then:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b november-update
  git push -u origin november-update
  ```
  Pushing the new branch gives a Cloudflare staging preview. Release later with a fast-forward merge into `main`, the same way as on 27 October (commands below).
- `october-update` can stay as it is or be deleted once the new branch exists (`git branch -d october-update` and `git push origin --delete october-update`); ask the owner.

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
  - **Marketing** style (editorial plus campaign wall, navy hero with lime accents, small tilts): Positioning and Brand (`HeroPasteup`, buzzword bingo, five clickable steps incl. Rollout, press clippings), Content Production (`HeroFanout`, stale LinkedIn feed, five clickable steps, press clippings). Example company "Talio".
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
- Check that "Talio" is not a real company in our market.
- Maria: review all German text (pages, pictures, forms, Plunk confirmations).
- Client testimonials, when available (slot ready in the form side panel).

## Next up

1. Self-host the fonts (GDPR; the live site still loads Google Fonts) and update the privacy policy (form drafts kept in the browser, answers sent to Plunk).
2. Owner and Maria feedback on the live pages and forms.
3. Later: DACH Market Entry (Marketing style) and Event Lead Generation (Sales style).

## Session log (newest first, keep about 5)

- 2026-10-27: Released to kadanco.com (`473b427`). Plunk set up by the owner (`docs/PLUNK-EMAILS-20261027-1315.md`). Forms: Skip and close ×, then Maria's review (buttons under the question aligned right, skip any question but the email, "Write a message instead"). Next round in a new branch.
- 2026-10-26 (late night): Sales style; Account-Based Marketing and Outbound Sales Pipeline rebuilt.
- 2026-10-26 (night): Layout jumps removed sitewide; forms themed by department with a coaching side panel.
- 2026-10-26 (evening): Content Production rebuilt and made clickable; only audit and strategy call CTAs; self-check simplified; route cards removed; Positioning and Brand gets Rollout and clickable pictures.
- 2026-10-26 (afternoon): Website Production rebuilt (hero that assembles itself, /website-audit/); Marketing style chosen; Positioning and Brand rebuilt.
- 2026-10-24 to 26: Homepage component round and sign-off; responsive rules; Product Design rebuilt as the template; contact modal replaced by full-screen form pages.
