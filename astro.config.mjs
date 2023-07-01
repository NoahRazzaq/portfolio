import { defineConfig } from 'astro/config';
import { defineConfig } from 'astro/config';
import vercelEdge from '@astrojs/vercel/edge';
import { inject } from '@vercel/analytics';



// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercelEdge(),
});

inject();