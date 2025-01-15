// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt', 'nuxt-particles'],
  routeRules: {
    '/streamers': {
      ssr: false
    }
  }
})
