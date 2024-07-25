<script setup lang="ts">
const content = ref<string>('')
</script>

<template>
  <div class="main-container">
    <div class="dashboard">
      <div class="inquiry">
        <div><h1>공동주택! 무엇이든 물어보세요!</h1></div>
        <div>
          <h3>
            48시간 내에 최선을 다해 답변드리겠습니다.(문의 사항과 과중에 따라
            답변이 지연될 수 있습니다.)
          </h3>
          <el-input
            v-model="content"
            placeholder="내용을 입력해주세요"
            style="width: 100%"
            :rows="4"
            type="textarea"
          />
        </div>
      </div>
      <div class="office">
        <div class="office-title"><h1>이달의 관리사무소</h1></div>
        <div class="office-card-container">
          <el-card body-class="office-card" shadow="hover"></el-card>
          <el-card body-class="office-card" shadow="hover"></el-card>
          <el-card body-class="office-card" shadow="hover"></el-card>
          <el-card body-class="office-card" shadow="hover"></el-card>
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
