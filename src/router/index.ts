import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    component: () => import("@/views/login/loginView.vue")
  },
  {
    path: "/main",
    component: () => import("@/views/main/mainView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token") ?? "";
    if (!token) {
      return "/login";
    }
  }
});

export default router;
