# Kadanco Website: Session Handoff

Start a new chat with: "Read docs/HANDOFF.md". Claude updates this file at the end of every work session (rule in `CLAUDE.md`), so it always shows where we stopped.

Last updated: 23 October 2026, 15:30 (Germany time)

## Read first

1. `CLAUDE.md`: brand rules, house rules, working style and the full decision log. It is the long-term record; this file is the short "where are we now".
2. `docs/masterplan.md`: group-wide plan (decisions D1 to D39), when copy or positioning is involved.

## Working setup

- Repo: `/Users/karansharma/Coding/kadanco-website`. Work branch `october-update`; `main` deploys to kadanco.com.
- Push `october-update` to get a Cloudflare preview (staging). Internal pages (/styleguide, /icons, /components) only exist locally and on staging.
- Never add a Co-Authored-By or any Claude line to commit messages.
- Keep out of commits: the owner's `package.json` and `package-lock.json` changes (`@fontsource/fira-sans`), `design/261020_Kadanco_Website_with-detail-page/`, `design/Klarna example/`, `_local/`.
- Do not use the images in `design/Sample images - Do not use them directly/` on the site (no licence).
- The owner commits and pushes. Claude leaves changes in the working tree and gives the commands.

## Current state

Latest commit on `october-update`: `0acc939` Contextual step scenes for all use cases, breadcrumbs removed sitewide. Working tree clean apart from the files listed above.

- Services: Product Design & Development, Digital Marketing & Branding, Sales Support & Systems (DE: Produktdesign & Entwicklung, Digitales Marketing & Branding, Vertriebsunterstützung & Systeme).
- 9 use cases, one go-to-market team, each led by one department and tagged with all it involves (`src/data/use-cases.ts`):
  - Product: Product Design, Website Production, Software Modernisation
  - Marketing: DACH Market Entry, Content Production, Positioning and Brand
  - Sales: Outbound Sales Pipeline, Event Lead Generation, Account-Based Marketing
- All 9 have detail pages in EN and DE: `src/components/UseCaseDetail.astro` with content in `src/data/use-case-pages/*.ts`.
- The "What's inside" steps are a contextual scene per page (`stepsLayout`): Product Design uses `StepsProductUI.astro`; the other eight use `StepsScene.astro` (web, slider, fan, map, board, calendar, sequence, org). The layouts `stack`, `expand` and `bento` stay available.
- Old use case URLs redirect with 301s in `public/_redirects`.
- Breadcrumbs removed sitewide.
- Homepage: hero intro "Kadanco is Execution as a Service: ...", department cards with photo on the left.

## Waiting on the owner

- Review the drafted pages: Software Modernisation and Account-Based Marketing (no design files existed).
- Confirm claims on the pages: Maria writes front-end code and pairs with client developers; back-end changes only where needed; cold calling and phone outreach; Meta ads and direct mail; native German in every Sales FAQ; "six to ten people" on ABM; "Months" as a Software Modernisation outcome.
- Which CMS platforms we build on, and a typical website launch time (Website Production FAQ).
- Maria: review all German use case text and the German scene labels.
- Brand: lime is used as a large ground on Marketing heroes and active step panels; the brand rules say never. Switch to a light lime tint?
- Photos for the homepage department cards (owner picks from Unsplash, uploads to R2, then we point the cards at the R2 URLs) and real photos for the step image slots.

## Next up

1. Act on the owner's answers above.
2. Optional: look into the `/de` route warning in the build (it existed before October 22).
3. From `CLAUDE.md` "Next": colour pass on the remaining pages, the 3 category (service) pages, glossary department filter, remaining wireframe pages, self-hosted fonts (GDPR), security and GDPR review before launch.
4. Google Sheet rows 82 and later may be missing the word "as" (an old export bug); check before reusing them.

## Session log (newest first, keep about 5)

- 2026-10-23: Contextual step scenes for all use cases; breadcrumbs removed; handoff file created.
- 2026-10-22: Services renamed; 9 use cases with tags, new URLs and redirects; all 9 detail pages written (EN and DE); step layouts (stack, Klarna expand row, bento, product UI).
- 2026-10-21: Homepage use cases as three department cards with photos; DACH page rebuilt on the new template.
- 2026-10-20: Owner copy round 1 from the Google Sheet; founder bios; "within two weeks" everywhere; dark mode for Who We Are and FAQ.
