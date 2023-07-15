import type {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from "axios";

export interface MLRequestInterceptors {
  requestOnFulfilled?: (
    value: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  responseOnFulfilled?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  requestOnRejected?: (error: any) => any;
  responseOnRejected?: (error: any) => any;
}

export interface MLCreateAxiosDefaults extends CreateAxiosDefaults {
  interceptors?: MLRequestInterceptors;
  isShowLoading?: boolean;
}

export interface MLAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: MLRequestInterceptors;
  isShowLoading?: boolean;
}