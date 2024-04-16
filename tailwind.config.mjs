const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
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
    function ({ addComponents, theme }) {
      addComponents({
        ".link": {
          color: theme("colors.black"),
          "border-bottom-width": "1.5px",
          "border-color": theme("colors.neutral.200"),
          "&:hover": {
            "border-color": theme("colors.neutral.500"),
            transition: "all 0.3s",
          },
          "&:focus": {
            "border-color": theme("colors.neutral.500"),
            transition: "all 0.3s",
          },
        },
        ".link-dark": {
          color: theme("colors.white"),
          "border-bottom-width": "1.5px",
          "border-color": theme("colors.neutral.700"),
          "&:hover": {
            "border-color": theme("colors.neutral.300"),
            transition: "all 0.3s",
          },
          "&:focus": {
            "border-color": theme("colors.neutral.300"),
            transition: "all 0.3s",
          },
        },
      });
    },
  ],
};
