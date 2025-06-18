// tailwind.config.js
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */

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
    extend: {
      typography: () => ({
        sky: {
          css: {
            "--tw-prose-body": "var(--color-sky-800)",
            "--tw-prose-headings": "var(--color-sky-900)",
            "--tw-prose-lead": "var(--color-sky-700)",
            "--tw-prose-links": "var(--color-orange-900)",
            "--tw-prose-bold": "var(--color-sky-900)",
            "--tw-prose-counters": "var(--color-sky-600)",
            "--tw-prose-bullets": "var(--color-sky-400)",
            "--tw-prose-hr": "var(--color-sky-300)",
            "--tw-prose-quotes": "var(--color-sky-900)",
            "--tw-prose-quote-borders": "var(--color-sky-300)",
            "--tw-prose-captions": "var(--color-sky-700)",
            "--tw-prose-code": "var(--color-sky-900)",
            "--tw-prose-pre-code": "var(--color-sky-100)",
            "--tw-prose-pre-bg": "var(--color-sky-900)",
            "--tw-prose-th-borders": "var(--color-sky-300)",
            "--tw-prose-td-borders": "var(--color-sky-200)",
            "--tw-prose-invert-body": "var(--color-sky-200)",
            "--tw-prose-invert-headings": "var(--color-white)",
            "--tw-prose-invert-lead": "var(--color-sky-300)",
            "--tw-prose-invert-links": "var(--color-white)",
            "--tw-prose-invert-bold": "var(--color-white)",
            "--tw-prose-invert-counters": "var(--color-sky-400)",
            "--tw-prose-invert-bullets": "var(--color-sky-600)",
            "--tw-prose-invert-hr": "var(--color-sky-700)",
            "--tw-prose-invert-quotes": "var(--color-sky-100)",
            "--tw-prose-invert-quote-borders": "var(--color-sky-700)",
            "--tw-prose-invert-captions": "var(--color-sky-400)",
            "--tw-prose-invert-code": "var(--color-white)",
            "--tw-prose-invert-pre-code": "var(--color-sky-300)",
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": "var(--color-sky-600)",
            "--tw-prose-invert-td-borders": "var(--color-sky-700)",
          },
        },
      }),
    },
  },
  plugins: [typography, forms],
};
