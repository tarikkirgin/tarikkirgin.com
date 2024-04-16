const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      xxxs: "300px",
      xxs: "375px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
  ],
};
