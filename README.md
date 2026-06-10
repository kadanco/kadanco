# Kadanco — website (v1)

One-page marketing site built with [Astro](https://astro.build). Plain HTML + CSS, no
UI framework. Design tokens come straight from the Kadanco Living Styleguide.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # preview the production build
```

The pages are fully static. The one dynamic piece is the contact Function in
`functions/` — Cloudflare Pages picks that up automatically when you deploy via
**Git** or `npx wrangler pages deploy dist` (run from the project root). A bare
drag-and-drop of `./dist` will publish the site but skip the function, so the form
won't send.

## Before you launch — replace these placeholders

- **Logo** — `src/layouts/Layout.astro` (favicon) and the `.brandmark` blocks in
  `src/pages/index.astro` (a green tile + "Kadanco" wordmark). Search for `LOGO PLACEHOLDER`.
- **Founder photos** — the round `.avatar` initials in the founders section. Search for
  `PHOTO PLACEHOLDER`.
- **Contact form** — already wired to ping Slack or Discord via a Cloudflare Pages
  Function (`functions/api/contact.js`). You just need to add the webhook secret —
  see "Form notifications" below.
- **Footer links** — `hello@kadanco.com` and the LinkedIn URL.
- **Karan's bio** — placeholder-level until you add titles, rough dates and one concrete win.

## Form notifications (Slack / Discord)

Every submission is sent to a Slack or Discord channel by the Cloudflare Function. The
function auto-detects which one from the URL, so you only set one secret.

**1. Get an incoming-webhook URL**
- *Slack:* create an app at api.slack.com/apps → enable **Incoming Webhooks** → **Add New
  Webhook to Workspace** → pick a channel → copy the URL.
- *Discord:* channel → **Edit Channel → Integrations → Webhooks → New Webhook** → **Copy
  Webhook URL**.

**2. Add it to Cloudflare** — your Pages project → **Settings → Variables and Secrets** →
add an **encrypted** variable named `WEBHOOK_URL` set to that URL (Production, and Preview
if you want test deploys to notify too). Redeploy.

**3. Test locally (optional)** — `astro dev` does not run Functions. To test the form end
to end on your machine:
```bash
cp .dev.vars.example .dev.vars   # paste your real WEBHOOK_URL inside
npm run build
npx wrangler pages dev dist      # serves the site + the function
```

Spam is filtered with a honeypot field; the front-end shows a sending state, a success
panel, and a readable error (with your email as a fallback) if delivery ever fails.

## Structure

```
functions/
  api/contact.js         # Cloudflare Function: receives the form, pings Slack/Discord
src/
  layouts/Layout.astro   # <head>, fonts, meta, favicon
  pages/index.astro      # the whole page + contact modal + modal script
  styles/global.css      # design tokens, tactile buttons, all components
public/                  # static assets (add your logo/og image here)
astro.config.mjs
.dev.vars.example        # template for local function testing
```

## Design notes

- Fonts: Plus Jakarta Sans (display/body) + JetBrains Mono (labels), loaded from Google
  Fonts in `Layout.astro`. Swap to `@fontsource/*` packages later if you want them self-hosted.
- Signature element: the tactile "hard offset shadow" buttons (`.btn-*` in `global.css`).
- The brand green (`#00d26a`) is used as a fill only, never as text on a light background
  (it fails contrast). Emphasis in copy uses a green underline instead — see `.mark`.
- Service taglines were rewritten in Kadanco's own voice (the originals matched a competitor
  word-for-word). They live in the `groups` array at the top of `index.astro` if you want to edit.
