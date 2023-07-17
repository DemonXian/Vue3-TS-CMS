<script setup lang="ts">
import type { ElForm } from "element-plus";
import { rulesAccount } from "../config/loginAccountConfig";
import localCache from "@/utils/cache";
import { useLoginStore } from "@/stores/login/login";

//保存账号密码
const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
});

const elFromRef = ref<InstanceType<typeof ElForm>>();
const loginStore = useLoginStore();

//登录方法
const loginAction = (isRememberPassword: boolean) => {
  elFromRef.value?.validate((callback) => {
    // 判断输入是否符合规则
    if (callback) {
      // 进行登录
      loginStore.accountLogin(account.name, account.password);
      // 判断是否记住密码
      if (isRememberPassword) {
        localCache.setCache("name", account.name);
        localCache.setCache("password", account.password);
      } else {
        localCache.deleteCache("name");
        localCache.deleteCache("password");
      }
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
      <ElInput v-model="account.password" show-password></ElInput>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
