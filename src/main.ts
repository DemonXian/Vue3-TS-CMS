import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import pinia from "./stores";
import router from "./router";

const app = createApp(App);

app.use(pinia);
app.use(router);

// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册。
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
