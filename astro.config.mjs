import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kadanco.com',
  integrations: [sitemap()],
  build: {
    // Inline CSS into the page so the static output is self-contained.
    inlineStylesheets: 'always',
  },
});
