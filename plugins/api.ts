export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: 'https://api.example.com',
    headers: {
      'Content-Type': 'application/json',
    },
  })
})
