import axios from "axios";

// axios的实例对象
axios
  .get("http://123.207.32.32:8000/home/multidata", {
    params: {
      name: "test",
      age: 18
    },
    timeout: 10000
  })
  .then((res) => {
    console.log(res.data);
  });

// 拦截器
axios.interceptors.request.use();
axios.interceptors.response.use();
