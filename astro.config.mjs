// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import vercel from '@astrojs/vercel';


export default defineConfig({
  site: 'https://jorgerosbel.vercel.app',
  integrations: [mdx(), sitemap({
    customPages: ["https://jorgerosbel.vercel.app/introducing-gitzen-ai-powered-git-commit-automation","https://jorgerosbel.vercel.app/introducing-novaboost-the-ultimate-astro-tailwindcss-blog-template"]
  })],
  output: "server",
  vite: {
    plugins: [tailwindcss(),tsconfigPaths()],
  },
  adapter: vercel(),
});