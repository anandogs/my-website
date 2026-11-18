import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // www is the host that serves the site; the bare domain redirects to it.
  site: 'https://www.anandoghose.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/random1') })],
  // Pages stay static; only src/pages/api/* opt out of prerendering and run on Vercel.
  adapter: vercel(),
});
