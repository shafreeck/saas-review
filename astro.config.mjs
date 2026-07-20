import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// PUBLIC_SITE_URL: replace with the real domain once purchased.
// The placeholder below keeps canonical URLs and the sitemap valid in the meantime.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://toolverdict.dev',
  output: 'static',
  integrations: [mdx(), sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
