import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/loginView.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/mainView.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/notFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

//路由导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    //查看是否保存token
    const token = localCache.getCache("token") ?? "";
    if (!token) {
      return "/login";
    }
  }
});

export default router;
