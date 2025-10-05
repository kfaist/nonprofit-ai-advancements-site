import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kfaist.github.io/nonprofit-ai-advancements-site',
  base: '/nonprofit-ai-advancements-site',
  integrations: [sitemap()],
});
