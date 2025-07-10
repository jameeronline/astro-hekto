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
      colors: {
        tertiary: {
          50: "var(--color-tertiary-50)",
          100: "var(--color-tertiary-100)",
          200: "var(--color-tertiary-200)",
          300: "var(--color-tertiary-300)",
          400: "var(--color-tertiary-400)",
          500: "var(--color-tertiary-500)",
          600: "var(--color-tertiary-600)",
          700: "var(--color-tertiary-700)",
          800: "var(--color-tertiary-800)",
          900: "var(--color-tertiary-900)",
          950: "var(--color-tertiary-950)",
        },
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            "--tw-prose-body": theme("colors.tertiary.700"), // Dark blue for body text
            "--tw-prose-headings": theme("colors.tertiary.900"), // Deeper blue for headings
            "--tw-prose-lead": theme("colors.tertiary.600"), // Medium blue for lead text
            "--tw-prose-links": theme("colors.tertiary.500"), // Vibrant blue for links
            "--tw-prose-bold": theme("colors.tertiary.800"), // Strong blue for bold text
            "--tw-prose-counters": theme("colors.tertiary.400"), // Lighter blue for counters
            "--tw-prose-bullets": theme("colors.tertiary.400"), // Lighter blue for bullets
            "--tw-prose-hr": theme("colors.tertiary.300 / 0.5"), // Semi-transparent light blue for HR
            "--tw-prose-quotes": theme("colors.tertiary.700"), // Dark blue for quotes
            "--tw-prose-quote-borders": theme("colors.tertiary.400"), // Light blue for quote borders
            "--tw-prose-captions": theme("colors.tertiary.600 / 0.8"), // Slightly transparent medium blue for captions
            "--tw-prose-code": theme("colors.tertiary.800"), // Strong blue for inline code
            "--tw-prose-pre-code": theme("colors.tertiary.100"), // Very light blue for preformatted code
            "--tw-prose-pre-bg": theme("colors.tertiary.950 / 0.1"), // Very dark blue background for pre
            "--tw-prose-th-borders": theme("colors.tertiary.300"), // Light blue for table header borders
            "--tw-prose-td-borders": theme("colors.tertiary.200 / 0.5"), // Semi-transparent lighter blue for table borders
            // Dark mode support
            "--tw-prose-invert-body": theme("colors.tertiary.100"), // Light blue for body text in dark mode
            "--tw-prose-invert-headings": theme("colors.tertiary.50"), // Very light blue for headings
            "--tw-prose-invert-lead": theme("colors.tertiary.200"), // Lighter blue for lead text
            "--tw-prose-invert-links": theme("colors.tertiary.400"), // Medium blue for links
            "--tw-prose-invert-bold": theme("colors.tertiary.50"), // Very light blue for bold text
            "--tw-prose-invert-counters": theme("colors.tertiary.300"), // Light blue for counters
            "--tw-prose-invert-bullets": theme("colors.tertiary.300"), // Light blue for bullets
            "--tw-prose-invert-hr": theme("colors.tertiary.400 / 0.4"), // Semi-transparent medium blue for HR
            "--tw-prose-invert-quotes": theme("colors.tertiary.100"), // Light blue for quotes
            "--tw-prose-invert-quote-borders": theme("colors.tertiary.300"), // Light blue for quote borders
            "--tw-prose-invert-captions": theme("colors.tertiary.200 / 0.8"), // Slightly transparent lighter blue for captions
            "--tw-prose-invert-code": theme("colors.tertiary.50"), // Very light blue for inline code
            "--tw-prose-invert-pre-code": theme("colors.tertiary.50"), // Very light blue for preformatted code
            "--tw-prose-invert-pre-bg": theme("colors.tertiary.900 / 0.2"), // Dark blue background for pre
            "--tw-prose-invert-th-borders": theme("colors.tertiary.300"), // Light blue for table header borders
            "--tw-prose-invert-td-borders": theme("colors.tertiary.400 / 0.5"), // Semi-transparent medium blue for table borders
          },
        },
      }),
    },
  },
  plugins: [typography, forms],
};
