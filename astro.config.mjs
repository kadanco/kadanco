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
  if (INTERNAL_PAGES.some((r) => page.replace(/\/$/, '').endsWith(r.pattern))) return false; // never list internal pages
  if (/\/(de\/)?(ux-audit|marketing-audit|pipeline-audit|strategy-call)\/?$/.test(page)) return false; // intake forms are noindex
  const m = page.match(LOCALE_URL);
  if (!m) return true; // English URL
  const routes = translatedRoutes[m[1]];
  if (!routes) return false;
  let path = m[2] || '/';
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return routes.includes(path);
}

// Internal pages: style guide (/styleguide), animated icons (/icons) and all
// components (/components). Shown locally and on staging, never on the live
// site. Staging = any Cloudflare Pages branch build other than main (Cloudflare
// sets CF_PAGES_BRANCH), or a build with KADANCO_STAGING=1. The live site is
// built from main, so these pages never reach kadanco.com. The brand system
// asks to keep the style guide private; staging URLs are unlisted and noindex.
const INTERNAL_PAGES = [
  { pattern: '/styleguide', entrypoint: './src/dev/styleguide.astro' },
  { pattern: '/icons', entrypoint: './src/dev/icons.astro' },
  { pattern: '/components', entrypoint: './src/dev/components.astro' },
];
const branch = process.env.CF_PAGES_BRANCH;
const isStagingBuild = (branch && branch !== 'main') || process.env.KADANCO_STAGING === '1';
function internalPages() {
  return {
    name: 'kadanco-internal-pages',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command === 'dev' || isStagingBuild) INTERNAL_PAGES.forEach((r) => injectRoute(r));
      },
    },
  };
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
  integrations: [sitemap({ filter: inSitemap }), internalPages()],
  // Astro 7 minifies CSS with Lightning CSS, which drops the standard
  // `backdrop-filter` and keeps only `-webkit-backdrop-filter`. That silently
  // removes the nav blur in Firefox. esbuild keeps both, so we use it instead.
  vite: {
    build: { cssMinify: 'esbuild' },
  },
});
