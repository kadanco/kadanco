import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static marketing site deployed to Cloudflare Pages.
// The contact form is handled by a Pages Function (functions/api/contact.js),
// so no SSR adapter is needed. Add one only if a page genuinely needs
// server-side rendering.
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
  integrations: [sitemap()],
});
