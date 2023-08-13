import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";

import pinia from "./stores";
import router from "./router";
import { globalRegister } from "./global";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(globalRegister)

app.mount("#app");
