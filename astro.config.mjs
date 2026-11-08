// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL when deploying elsewhere. It is used for canonical URLs, the
// sitemap, and absolute Open Graph image URLs.
const site = process.env.SITE_URL ?? 'https://kamilagi.dev';

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
