let BASE_URL = "";
const TIME_OUT = 10000;

if (process.env.NODE_ENV === "development") {
  // 开发环境
  BASE_URL = "http://123.207.32.32:8000";
} else if (process.env.NODE_ENV === "production") {
  // 生产环境
  BASE_URL = "http://123.207.32.32:8000";
} else {
  // 测试环境
  BASE_URL = "http://123.207.32.32:8000";
}

export { BASE_URL, TIME_OUT };
