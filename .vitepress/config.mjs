import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "mtm6407-static-site-RongXinHu",
  title: "MTM6407",
  description: "Web Dev Iv",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
      appearance: true, // 启用主题切换
    },

    nav: [
      { text: "Web Development", link: "/portfolio/web-development" },
      { text: "Web Design", link: "/portfolio/web-design" },
      { text: "photography", link: "/portfolio/photography" },
    ],

    sidebar: [
      {
        items: [
          { text: "Web Development", link: "/portfolio/web-development" },
          { text: "Web Design", link: "/portfolio/web-design" },
          { text: "photography", link: "/portfolio/photography" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "https://twitter.com" },
    ],
  },
});
