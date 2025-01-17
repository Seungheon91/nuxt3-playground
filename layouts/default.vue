<script setup lang="ts"></script>

<template>
  <div class="flex h-screen w-screen flex-col">
    <Header />
    <div class="flex flex-1">
      <Aside />
      <main class="w-full p-4">
        <slot />
      </main>
    </div>
  </div>
</template>
