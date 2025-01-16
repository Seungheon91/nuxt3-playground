<script setup lang="ts"></script>

<template>
  <div class="flex h-screen flex-col">
    <Header />
    <div class="flex flex-1">
      <Aside />
      <main class="">
        <slot />
      </main>
    </div>
  </div>
</template>
