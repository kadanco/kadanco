# Kadanco website

Marketing site for Kadanco UG (Berlin), built with [Astro](https://astro.build) as a
static site and deployed to Cloudflare Pages. Plain HTML and CSS, no UI framework. The
design system lives in `src/styles/global.css` (indigo / lime / periwinkle palette,
Fira Sans, 10px corner radius).

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # preview the production build
```

## Structure

The site is component-based. `src/layouts/Layout.astro` owns the `<head>` and renders the
shared `Nav`, `Footer` and `ContactModal` around each page's `<slot/>`, plus the global UI
script (colour-aware nav, scroll progress, section spy) and the consent + analytics tags.
Pages just wrap their content in `<Layout>`.

```
functions/
  api/contact.js            Cloudflare Pages Function: contact form -> Plunk
src/
  layouts/Layout.astro      <head>, shared chrome, global script, GTM + CookieYes
  components/               Nav, Footer, ContactModal, ComparisonMatrix,
                            UseCaseSpotlight, CadenceTimeline
  pages/
    index.astro             homepage
    imprint.astro           Impressum + privacy policy
    glossary/index.astro    glossary index (search, category filter, A-Z)
    glossary/[slug].astro   one page per term, from src/data/glossary.json
  data/glossary.json        glossary content
  styles/global.css         design tokens and all shared components
public/                     static assets served at the site root
astro.config.mjs
.dev.vars.example           template for local Function testing
```

All client scripts are written with `is:inline` so they are emitted verbatim and never
bundled into `/_astro/*.js`. This keeps single-page previews working standalone. Keep any
new scripts inline.

## Deployment

Push to `main` and Cloudflare Pages builds and deploys automatically (build `npm run
build`, output `dist`). The Pages Function in `functions/` is picked up automatically on
Git deploys. A bare drag-and-drop of `./dist` would publish the site but skip the
function, so the contact form would not send.

## Contact form (Plunk)

The contact modal posts to `/api/contact`, a Cloudflare Pages Function that validates the
submission (with a honeypot for bots) and sends it to Plunk as a `contact-form-submitted`
event.

Set the secret in Cloudflare: Pages project -> Settings -> Variables and Secrets -> add an
encrypted variable `PLUNK_API_KEY` (Production, and Preview too if you want test deploys to
send). To test locally:

```bash
cp .dev.vars.example .dev.vars   # paste your real PLUNK_API_KEY inside
npm run build
npx wrangler pages dev dist      # serves the site plus the function
```

## Analytics and consent

Google Tag Manager (container `GTM-MF44PR8H`) and the CookieYes consent banner are wired in
`Layout.astro`. CookieYes loads first and sets Google Consent Mode defaults to denied; GA4
and any other tags are configured inside the GTM container and fire only after the visitor
consents. GA4's measurement ID lives in GTM, not in this repo. To change the GTM or
CookieYes IDs, edit `Layout.astro`.

## House rules

- No em dashes anywhere in copy (use commas, periods, colons or parentheses).
- Plain words over jargon.
- Brand assets (logos, favicons, badges) are served from the R2 bucket at
  https://assets.kadanco.com.