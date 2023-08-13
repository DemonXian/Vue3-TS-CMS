import router from "@/router";
import type { RouteRecordRaw } from "vue-router";

export async function generateRouteByUserMenus(userMenus: any[]) {
  // 生成路由对象
  const routes: RouteRecordRaw[] = [];

  // 1.获取全部路由对象
  const allRoutes: RouteRecordRaw[] = [];
  const modules = import.meta.glob("@/router/main/**/*.ts");
  for (const path in modules) {
    // Promise 中的then是异步的，使用await等待then执行完allRoutes才有全部数据
    await modules[path]().then((mod) => {
      allRoutes.push(mod.default);
    });
  }

  // 2.根据获取的menu动态添加路由
  //userMenu:
  // type === 1 -> children -> type === 2
  // type === 1 -> children -> type === 1 -> children -> type === ...
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);

  for (const route of routes) {
    router.addRoute("main", route);
  }
}
