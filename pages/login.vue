<script setup lang="ts">
definePageMeta({ layout: 'empty' })
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <h2 class="text-center text-2xl font-bold text-gray-800">Login</h2>
      <form class="mt-6">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="mt-1 w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="mt-1 w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Log In
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account?
        <a href="#" class="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>
