import { defineStore } from "pinia";
import type { ILoginState } from "./type";

export const useLoginStore = defineStore("login", () => {
  const loginStore = reactive<ILoginState>({
    token: "",
    userInfo: ""
  });

  const accountLogin = (name: string, password: string) => {
    console.log(`账号：${name}，密码：${password}`);
  };

  return {
    ...toRefs(loginStore),
    accountLogin
  };
});
