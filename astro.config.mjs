// @ts-check
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'avd06zyn',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2025-04-20",
      studioBasePath: '/studio'
    }),
    react()
  ],
  experimental: {
    fonts: [{
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter"
    }]
  },
  vite: {
    plugins: [tailwindcss()],
  },
});