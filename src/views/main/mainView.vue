<script setup lang="ts">
import NavMenu from "./components/nav-menu";
import NavHeader from "./components/nav-header";
// 左侧菜单折叠标识
const isFold = ref(false);

const changFold = (fold: boolean) => {
  isFold.value = fold;
};
</script>

<template>
  <div class="mainView">
    <el-container class="main-content">
      <el-aside :width="isFold ? '64px' : '210px'">
        <NavMenu :isFold="isFold" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header"><NavHeader @changFold="changFold" /></el-header>
        <el-container class="page-content">
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.mainView {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  color: #f0f2f5;

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
