// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/style/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        class: "scroll-smooth",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap",
        },
        {
          rel: "canonical",
          href: "https://hasanmuzak.dev",
        },
      ],
      title: "Hasan Muzak | Fullstack Developer - Portfolio",
      meta: [
        // Primary Meta Tags
        {
          name: "title",
          content: "Hasan Muzak | Fullstack Developer - Portfolio",
        },
        {
          name: "description",
          content:
            "I'm a fullstack engineer specializing in high-performance infrastructure and intuitive user interfaces. Expert in Python, Vue.js, FastAPI, and cloud platforms like GCP and AWS.",
        },
        {
          name: "keywords",
          content:
            "Hasan Muzak, Fullstack Developer, Software Engineer, Web Developer, Python, Vue.js, FastAPI, React, JavaScript, TypeScript, PostgreSQL, GCP, AWS, Backend Developer, Frontend Developer, Portfolio",
        },
        {
          name: "author",
          content: "Hasan Muzak",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "language",
          content: "English",
        },
        // Open Graph / Facebook
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://hasanmuzak.dev/",
        },
        {
          property: "og:title",
          content: "Hasan Muzak | Fullstack Developer - Portfolio",
        },
        {
          property: "og:description",
          content:
            "I'm a fullstack engineer specializing in high-performance infrastructure and intuitive user interfaces. Expert in Python, Vue.js, FastAPI, and cloud platforms.",
        },
        {
          property: "og:site_name",
          content: "Hasan Muzak Portfolio",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: "https://hasanmuzak.dev/",
        },
        {
          name: "twitter:title",
          content: "Hasan Muzak | Fullstack Developer - Portfolio",
        },
        {
          name: "twitter:description",
          content:
            "I'm a fullstack engineer specializing in high-performance infrastructure and intuitive user interfaces. Expert in Python, Vue.js, FastAPI, and cloud platforms.",
        },
        // Additional SEO
        {
          name: "theme-color",
          content: "#050505",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", "sans-serif"],
            mono: ["JetBrains Mono", "monospace"],
          },
          screens: {
            xs: "576px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
          },
          backgroundImage: {
            "grid-pattern":
              "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
          },
          animation: {
            "border-spin": "border-spin 4s linear infinite",
          },
          keyframes: {
            "border-spin": {
              "100%": { transform: "rotate(-360deg)" },
            },
          },
        },
      },
    },
  },
  nitro: {
    preset: "cloudflare-pages-static",
  },
});
