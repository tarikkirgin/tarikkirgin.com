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
    function ({ addComponents, theme }) {
      addComponents({
        ".link": {
          color: theme("colors.black"),
          "border-bottom-width": "1.5px",
          "border-color": theme("colors.gray.200"),
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            "border-color": theme("colors.gray.500"),
          },
          "&:focus": {
            "border-color": theme("colors.gray.500"),
          },
        },
      });
    },
  ],
};
