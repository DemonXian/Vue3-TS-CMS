import type { App } from "vue";
import { Monitor, Setting, Goods, ChatLineRound } from "@element-plus/icons-vue";

const components = [Monitor, Setting, Goods, ChatLineRound];

export function registerElementIcon(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
