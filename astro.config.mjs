// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER: set SITE_URL when you deploy (for example https://marcella.example).
// It is used for canonical URLs, the sitemap, and absolute Open Graph image URLs.
const site = process.env.SITE_URL ?? 'https://portfolio.example.com';

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
