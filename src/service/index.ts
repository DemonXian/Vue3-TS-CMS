// service统一出口
import MLRequest from "./request";
import localCache from "@/utils/cache";
import { BASE_URL, TIME_OUT } from "./request/config";

const mlRequest = new MLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestOnFulfilled(value) {
      const token = localCache.getCache("token") ?? "";
      if (token) {
        value.headers.Authorization = `Bearer ${token}`;
      }
      return value;
    }
    //   requestOnRejected(error) {
    //     console.log("请求拦截失败");
    //     return error;
    //   },
    //   responseOnFulfilled(value) {
    //     console.log("响应拦截成功", value.data);
    //     return value;
    //   },
    //   responseOnRejected(error) {
    //     console.log("响应拦截失败",error);
    //     return error;
    //   }
  }
});

export default mlRequest;
