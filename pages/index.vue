<script setup lang="ts">
const content = ref<string>('')
</script>

<template>
  <div class="main-container">
    <div class="dashboard">
      <div class="inquiry">
        <div><h1>제목</h1></div>
        <div>
          <h3>
            <span>작성자</span>
          </h3>
        </div>
      </div>
      <div class="office">
        <div class="office-title"><h1>제목</h1></div>
        <div class="office-card-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="side-dashboard">
      <div class="inquiry"></div>
      <div class="emergency-notice"></div>
      <div class="banner"></div>
    </div>
  </div>
</template>
