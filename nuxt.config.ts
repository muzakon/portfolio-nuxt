const path = require("path");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/style/main.less"],
  plugins: ["@/plugins/antd.ts"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
      title: "Hasan Muzak - Personal Website",
      meta: [
        {
          name: "description",
          content: "Explore the portfolio of a skilled Fullstack Developer. Discover innovative solutions and projects showcasing expertise in modern web development."
        }
      ]
    },
    
  },
  // nitro: {
  //   output: {
  //     publicDir: path.join(__dirname, "dist"),
  //   },
  // },
  tailwindcss: {
    config: {
      theme: {
        screens: {
          xs: "576px",
          sm: "640px",
          // => @media (min-width: 640px) { ... }

          md: "768px",
          // => @media (min-width: 768px) { ... }

          lg: "1024px",
          // => @media (min-width: 1024px) { ... }

          xl: "1280px",
          // => @media (min-width: 1280px) { ... }

          "2xl": "1536px",
          // => @media (min-width: 1536px) { ... }
        },
      },
    },
  },
});
