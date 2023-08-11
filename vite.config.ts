import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],

      resolvers: [
        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ]
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件 <i-ep-user />
        IconsResolver({
          enabledCollections: ["ep"]
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    }),

    Icons({
      autoInstall: true
    })
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  // 代理配置
  server: {
    proxy: {
      "/api": {
        // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: "http://codercba.com:5000", // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        ws: true, // 允许websocket代理
        // 重写路径 --> 作用与vue配置pathRewrite作用相同
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always"
      }
    }
  }
});
