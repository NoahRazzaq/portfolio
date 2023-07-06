import { defineConfig } from 'astro/config';
import { inject } from '@vercel/analytics';
import vercel from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
    adapter: vercel({
    analytics: true
      })
});

inject();