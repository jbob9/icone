import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://www.iconeht.com/',
  integrations: [
    sanity({
      projectId: "avd06zyn",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-04-20",
      studioBasePath: "/studio",
    }),
    react(),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});
