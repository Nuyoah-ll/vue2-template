import axios from "axios";

export default function request(config) {
  // 创建axios实例，指定公共配置
  const instance = axios.create({
    timeout: 5000,
    withCredentials: true,
    validateStatus: status => /^(2|3)\d{2}$/.test(status)
  });

  // axios实例生产环境和开发环境对应接口地址。请根据需要自行设置
  switch (process.env.NODE_ENV) {
    case "production":
      instance.defaults.baseURL = "";
      // 例如：instance.defaults.baseURL = "http://www.backend.com"
      break;
    default:
      instance.defaults.baseURL = "";
    // 例如：instance.defaults.baseURL = "http://127.0.0.1:8000"
  }

  // 请求拦截，携带token，如果您没有将token放在localStorage里，请自行修改。
  instance.interceptors.request.use(config => {
    const token = "Bearer " + localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    return config;
  });

  // 响应拦截，请自行设置错误处理方式
  instance.interceptors.response.use(response => {
    return response.data;
  }, error => {
    const { response } = error;
    if (response) {
      let errorPromise;
      switch (response.status) {
        case 400:
          errorPromise = Promise.reject(response.data);
          break;
        default:
          errorPromise = Promise.reject(error);
      }
      return errorPromise;
    }
    // 断网处理
    else {
      if (!window.navigator.onLine) {
        return
      }
      return Promise.reject(error);
    }
  })

  return instance(config);
} 