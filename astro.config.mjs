import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { translatedRoutes } from './src/i18n/ui';

// Static marketing site deployed to Cloudflare Pages.
// The contact form is handled by a Pages Function (functions/api/contact.js),
// so no SSR adapter is needed. Add one only if a page genuinely needs
// server-side rendering.

// Sitemap policy: English URLs are always included. A /de/ URL is included only
// when it is a REAL translated page, i.e. its path is listed in translatedRoutes
// (src/i18n/ui.ts). Untranslated /de/ URLs are Astro fallback stubs that redirect
// to English, so they stay out of the sitemap.
const LOCALE_URL = /^https:\/\/kadanco\.com\/(de)(\/.*)?$/;
function inSitemap(page) {
  const m = page.match(LOCALE_URL);
  if (!m) return true; // English URL
  const routes = translatedRoutes[m[1]];
  if (!routes) return false;
  let path = m[2] || '/';
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return routes.includes(path);
}

export default defineConfig({
  site: 'https://kadanco.com',
  output: 'static',
  // /glossary/positioning and /glossary/positioning/ both resolve. 'directory'
  // writes each page as folder/index.html, which is what static hosts expect
  // and matches the URLs already indexed.
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // Inline CSS into the page so the static output is self-contained.
    inlineStylesheets: 'always',
  },
  // English stays at the root (prefixDefaultLocale: false), German lives under
  // /de/. Any German URL without its own file redirects to the English page.
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'redirect',
    },
    fallback: { de: 'en' },
  },
  integrations: [sitemap({ filter: inSitemap })],
});
