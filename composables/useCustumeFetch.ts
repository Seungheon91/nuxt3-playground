import type { UseFetchOptions } from 'nuxt/app'

export function useCustumeFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$custumeFetch,
  })
}
