<script setup lang="ts"></script>

<template>
  <div class="layout">
    <Header />
    <div class="layout__body">
      <Aside />
      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout__body {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
