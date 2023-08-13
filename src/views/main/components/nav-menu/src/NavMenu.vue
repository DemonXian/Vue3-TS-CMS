<script setup lang="ts">
import { useLoginStore } from "@/stores/login/login";
const loginStore = useLoginStore();

// 左侧菜单折叠标识
const props = defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
});

// 获取图标名字
const getIconName = (iconName: string) => {
  if (typeof iconName === "string") {
    const str = iconName.split("el-icon-")[1];
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
  return "";
};
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!props.isFold">Vue3+TS</span>
    </div>
    <div class="menu">
      <el-menu
        class="el-menu-vertical"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
        :collapse="isFold"
        :collapse-transition="false"
      >
        <template v-for="item in loginStore.userMenus" :key="item.id">
          <!-- 二级菜单 -->
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id + ''">
              <template #title>
                <el-icon v-if="typeof item.icon === 'string'">
                  <component :is="getIconName(item.icon)"></component>
                </el-icon>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subItem in item.children" :key="subItem.id">
                <el-menu-item :index="subItem.id + ''">
                  <template #title>
                    <el-icon v-if="typeof subItem.icon === 'string'">
                      <component :is="getIconName(subItem.icon)"></component>
                    </el-icon>
                    <span>{{ subItem.name }}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <!-- 一级菜单 -->
          <template v-else-if="item.type === 2">
            <el-menu-item :index="item.id + ''">
              <template #title>
                <el-icon v-if="typeof item.icon === 'string'">
                  <component :is="getIconName(item.icon)"></component>
                </el-icon>
                <span>{{ item.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  // 目录
  .el-menu {
    border-right: none;
    .el-sub-menu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
    }

    :deep(.el-sub-menu__title) {
      background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
