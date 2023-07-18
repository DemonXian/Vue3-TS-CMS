import axios, { type AxiosInstance } from "axios";
import type { MLRequestInterceptors, MLCreateAxiosDefaults, MLAxiosRequestConfig } from "./type";

let defaultLoading: boolean;

class MLRequest {
  private instance: AxiosInstance;
  private interceptors?: MLRequestInterceptors;
  private isShowLoading: Boolean;
  private loadingInstance!: ReturnType<typeof ElLoading.service>;

  constructor(config: MLCreateAxiosDefaults) {
    // 默认显示Loading
    defaultLoading = config.isShowLoading ?? true;

    //创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.interceptors = config.interceptors;
    this.isShowLoading = defaultLoading;

    // 当有config.interceptors时 对当前实例添加拦截器
    if (this.interceptors) {
      this.addInstanceInterceptors();
    }

    //全局添加拦截器
    this.addGlobalInterceptors();
  }

  //对实例添加拦截器
  addInstanceInterceptors() {
    this.instance.interceptors.request.use(
      this.interceptors?.requestOnFulfilled,
      this.interceptors?.requestOnRejected
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseOnFulfilled,
      this.interceptors?.responseOnRejected
    );
  }

  //全局添加拦截器 对所有实例对象添加拦截器
  addGlobalInterceptors() {
    this.instance.interceptors.request.use(
      (value) => {
        if (this.isShowLoading) {
          const loadingInstance = ElLoading.service({
            lock: true,
            text: "正在加载中...",
            background: "rgba(0,0,0,0.5)"
          });

          //保存loadingInstance
          this.loadingInstance = loadingInstance;
        }

        // console.log("这是全局请求拦截");
        return value;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (value) => {
        // console.log("这是全局响应拦截");

        // 关闭动画
        this.loadingInstance.close();
        return value.data;
      },
      (error) => {
        this.loadingInstance.close();
        return error;
      }
    );
  }

  request<T>(config: MLAxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 将isShowLoading设回默认值 防止请求Loading被上次请求影响
      this.isShowLoading = config.isShowLoading ?? defaultLoading;

      // 对单次请求添加拦截器
      config.transformRequest = config.interceptors?.requestOnFulfilled;
      config.transformResponse = config.interceptors?.responseOnFulfilled;

      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T>(config: MLAxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: MLAxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T>(config: MLAxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  put<T>(config: MLAxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: " PUT" });
  }
}
export default MLRequest;
