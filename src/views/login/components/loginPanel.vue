<script setup lang="ts">
import LoginAccount from "./loginAccount.vue";
import LoginPhone from "./loginPhone.vue";
import { User, Iphone } from "@element-plus/icons-vue";

const isRememberPassword = ref(true);

// 引用LoginAccount组件
const loginAccountRef = ref<InstanceType<typeof LoginAccount>>();
// 引用 LoginPhone组件
const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>();

// 选择的tab
const chooseTab = ref("account");

const handleLoginClick = () => {
  if (chooseTab.value === "account") {
    // 调用LoginAccount中的登录方法
    loginAccountRef.value?.loginAction(isRememberPassword.value);
  } else if (chooseTab.value === "phone") {
    // 调用LoginPhone中的登录方法
    loginPhoneRef.value?.loginAction();
  }
};
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <el-tabs type="border-card" class="demo-tabs" stretch v-model="chooseTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="loginAccountRef"></LoginAccount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="loginPhoneRef"></LoginPhone>
      </el-tab-pane>
    </el-tabs>

    <div class="password-action">
      <el-checkbox v-model="isRememberPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" size="default" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .password-action {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }

  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
}
</style>
