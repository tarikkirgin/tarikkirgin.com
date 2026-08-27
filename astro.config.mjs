import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import { unified, rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkBreaks from "remark-breaks";
import rehypeExternalLinks from "rehype-external-links";
import { siteConfig } from "~/consts";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Platypi",
      cssVariable: "--font-platypi",
      weights: ["300 800"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: ["100 800"],
      fallbacks: ["monospace"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      weights: ["300 700"],
      fallbacks: ["sans-serif"],
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
    processor: unified({
      remarkPlugins: [remarkBreaks],
      remarkRehype: {
        clobberPrefix: "",
      },

      rehypePlugins: [
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: ["anchor"],
              ariaHidden: "true",
              tabIndex: -1,
            },
            content: { type: "text", value: "" },
          },
        ],
        [
          rehypeExternalLinks,
          {
            properties: {
              class: "external-link",
            },
            target: "_blank",
            rel: ["noopener noreferrer"],
          },
        ],
      ],
    }),
  },
  integrations: [icon(), react(), mdx()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
