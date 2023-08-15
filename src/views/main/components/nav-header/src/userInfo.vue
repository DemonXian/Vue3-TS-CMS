<script setup lang="ts">
import { SwitchButton, User, Setting } from "@element-plus/icons-vue";
import { useLoginStore } from "@/stores/login/login";

const loginStore = useLoginStore();
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <div class="user-info-name">{{ loginStore.userInfo.name }}</div>
      <el-icon class="el-icon--right"
        ><div class="user-info-head-img">
          <el-avatar
            size="default"
            src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',"
          /></div
      ></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="SwitchButton"> 退出登录 </el-dropdown-item>
        <el-dropdown-item :icon="User" divided> 用户信息 </el-dropdown-item>
        <el-dropdown-item :icon="Setting">系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="less">
.el-dropdown {
  cursor: pointer;

  :focus-visible {
    outline: 0;
  }
  .el-dropdown-link {
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    border: none;
  }
}
</style>
