import { defineStore } from "pinia";
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login";
import localCache from "@/utils/cache";
import type { ILoginState } from "./type";
import type { IAccount } from "@/service/login/type";
import router from "@/router";

export const useLoginStore = defineStore("login", () => {
  const loginStore = reactive<ILoginState>({
    token: "",
    userInfo: {},
    userMenus: []
  });

  const accountLogin = async (account: IAccount) => {
    // 实现登录逻辑
    const loginResult = await accountLoginRequest(account);
    const { id, token } = loginResult.data;

    // 保存token
    loginStore.token = token;
    localCache.setCache("token", token);

    //请求登录用户信息
    const userInfoResult = await requestUserInfoById(id);
    const userInfo = userInfoResult.data;
    loginStore.userInfo = userInfo;

    localCache.setCache("userInfo", userInfo);

    // 请求用户菜单
    const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
    const userMenus = userMenusResult.data;
    loginStore.userMenus = userMenus;

    // 跳转到首页
    router.push("/main");
  };

  const phoneLogin = (phoneNum: string, phoneCode: string) => {
    console.log(`手机号：${phoneNum}，验证码：${phoneCode}`);
  };

  return {
    ...toRefs(loginStore),
    accountLogin,
    phoneLogin
  };
});
