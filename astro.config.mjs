import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    react(),
    mdx({
      syntaxHighlight: false,
      remarkRehype: {
        clobberPrefix: "",
      },
      remarkPlugins: [remarkBreaks],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: ["anchor"],
            },
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
        [
          rehypePrettyCode,
          {
            theme: "monokai",
          },
        ],
      ],
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
