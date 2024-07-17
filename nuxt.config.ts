// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['element-plus/dist/index.css', '~/assets/styles/main.scss'],
  modules: ['@vueuse/nuxt', '@element-plus/nuxt', '@pinia/nuxt'],
  compatibilityDate: '2024-07-12',
})
