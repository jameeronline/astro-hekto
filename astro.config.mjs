// @ts-check
import { defineConfig } from "astro/config";

import path from "path";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jameer.online", // Replace with your site's URL
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

  integrations: [mdx(), sitemap(), alpinejs(), icon(), react()],
  adapter: netlify(),
});