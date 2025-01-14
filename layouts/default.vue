<script setup lang="ts"></script>

<template>
  <div class="flex h-full flex-col">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <Aside />
      <main class="">
        <slot />
      </main>
    </div>
  </div>
</template>
