// @ts-check
import { defineConfig } from "astro/config";

//environment variables
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_USE_CDN } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

import path from "path";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.ASTRO_SITE_URL || "https://jameer.online", // Use env var or fallback
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/": path.resolve("./src"),
        "@/components": path.resolve("./src/components"),
        "@/blocks": path.resolve("./src/components/blocks"),
        "@/starwind": path.resolve("./src/componentsy/starwind"),
        "@/layouts": path.resolve("./src/layouts"),
        "@/pages": path.resolve("./src/pages"),
        "@/utils": path.resolve("./src/utils"),
        "@/styles": path.resolve("./src/styles"),
        "@/config": path.resolve("./src/config"),
        "@/assets": path.resolve("./src/assets"),
        "@/stores": path.resolve("./src/stores"),
      },
    },
  },

  integrations: [
    mdx(),
    sitemap(),
    alpinejs(),
    icon(),
    react(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: SANITY_USE_CDN, // expects "true" or "false"
    }),
  ],
  adapter: netlify(),
});
