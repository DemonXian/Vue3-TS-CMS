import mlRequest from "../index";

import type { IAccount, IDataType, ILoginResult } from "./type";

enum LoginAPI {
  accountLogin = "/login",
  loginUserInfo = "/users/",
  userMenus = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  return mlRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.accountLogin,
    data: account,
    isShowLoading: false
  });
}

export function requestUserInfoById(id: number) {
  return mlRequest.get<IDataType>({
    url: LoginAPI.loginUserInfo + id,
    isShowLoading: false
  });
}

export function requestUserMenusByRoleId(id: number) {
  return mlRequest.get<IDataType>({
    url: LoginAPI.userMenus + id + "/menu",
    isShowLoading: false
  });
}
