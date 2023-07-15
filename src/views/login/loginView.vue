<script setup lang="ts">
import LoginPanel from "./components/loginPanel.vue";
</script>

<template>
  <div class="loginView">
    <LoginPanel></LoginPanel>
  </div>
</template>

<style scoped lang="less">
.loginView {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
