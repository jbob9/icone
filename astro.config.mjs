// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'avd06zyn',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2025-04-20",
      studioBasePath: '/studio' // If you want to access the Studio on a route
    }),
    react()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});