// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
export default defineConfig({
  site: 'https://jorgerosbel.vercel.app',
  integrations: [mdx(), sitemap()],
  output: "server",
  vite: {
    plugins: [tailwindcss(),tsconfigPaths()],
  },
});