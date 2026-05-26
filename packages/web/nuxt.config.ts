import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  vite: {
    resolve: {
      alias: {
        '@resume': fileURLToPath(new URL('../../', import.meta.url))
      }
    }
  }
})