import type { App } from "vue";
import { registerElementIcon } from "./register-element-icon";

export const globalRegister = {
  install: (app: App) => {
    registerElementIcon(app);
  }
};
