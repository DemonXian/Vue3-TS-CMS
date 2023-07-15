<script setup lang="ts">
import type { ElForm } from "element-plus";
import { rulesAccount } from "../config/loginAccountConfig";

//保存账号密码
const account = reactive({
  name: "",
  password: ""
});

const elFromRef = ref<InstanceType<typeof ElForm>>();

//登录方法
const loginAction = () => {
  elFromRef.value?.validate((callback) => {
    if (callback) {
      console.log("登录");
    }
  });
};

//向外暴露方法
defineExpose({
  loginAction
});
</script>

<template>
  <ElForm label-width="60px" :rules="rulesAccount" :model="account" ref="elFromRef">
    <ElFormItem label="账号" prop="name">
      <ElInput v-model="account.name" autofocus></ElInput>
    </ElFormItem>
    <ElFormItem label="密码" prop="password">
      <ElInput v-model="account.password" type="password"></ElInput>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
