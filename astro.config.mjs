// @ts-check
import { defineConfig } from "astro/config";

import path from "path";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/components": path.resolve("./src/components"),
        "@/blocks": path.resolve("./src/components/blocks"),
        "@/starwind": path.resolve("./src/componentsy/starwind"),
        "@/layouts": path.resolve("./src/layouts"),
        "@/pages": path.resolve("./src/pages"),
        "@/utils": path.resolve("./src/utils"),
        "@/styles": path.resolve("./src/styles"),
        "@/config": path.resolve("./src/config"),
        "@/assets": path.resolve("./src/assets"),
      },
    },
  },

  integrations: [mdx(), sitemap(), alpinejs(), icon()],
});
