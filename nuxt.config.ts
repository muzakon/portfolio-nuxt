// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  css: ["@/assets/style/main.less"],
  plugins: ["@/plugins/antd.ts"],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
        },
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        }
      ]
    }
  }
})