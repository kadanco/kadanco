import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://kadanco.com',

  build: {
    // Inline CSS into the page so the static output is self-contained.
    inlineStylesheets: 'always',
  },

  output: "hybrid",
  adapter: cloudflare()
});