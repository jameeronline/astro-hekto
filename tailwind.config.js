// tailwind.config.js
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,astro,md,mdx}", // adjust to your project
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [typography, forms],
};
