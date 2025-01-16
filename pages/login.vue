<script setup lang="ts">
definePageMeta({ layout: 'empty' })
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <h2 class="text-center text-2xl font-bold text-gray-800">로그인</h2>
      <form class="mt-6">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">
            아이디
          </label>
          <input
            type="text"
            id="username"
            class="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            placeholder="아이디을 입력해주세요."
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">
            패스워드
          </label>
          <input
            type="password"
            id="password"
            class="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            placeholder="패스워드를 입력해주세요."
            required
          />
        </div>
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          로그인
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        계정이 없나요?
        <NuxtLink to="/signup" class="text-blue-500 hover:underline">
          회원가입
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
