// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head:{
      link: [
        {
          rel: 'preload',
          href: '/fonts/LibertinusSerif-Regular.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['@/assets/css/main.css'],
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com']
    }
  }

})