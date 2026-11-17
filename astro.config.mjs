import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://anandoghose.com',
  integrations: [sitemap()],
  // Pages stay static; only src/pages/api/* opt out of prerendering and run on Vercel.
  adapter: vercel(),
});
