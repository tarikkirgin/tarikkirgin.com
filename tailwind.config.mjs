const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-dim": "var(--background-dim)",
        foreground: "var(--foreground)",
        "foreground-dim": "var(--foreground-dim)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        muted: "var(--muted)",
      },
    },
    screens: {
      xxxxs: "230px",
      xxxs: "300px",
      xxs: "375px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus-visible"]);
      addVariant("group-hocus", [".group:hover &", ".group:focus &"]);
    }),
  ],
};
