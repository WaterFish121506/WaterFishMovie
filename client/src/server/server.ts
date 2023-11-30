import axios from "axios";
import errorCode from "./errorCode";
import { ElMessage, ElNotification } from "element-plus";
import { error } from "console";

const servive = axios.create({
  baseURL: `${import.meta.env.BASE_URL}api`,
  timeout: 10000,
});

/**
 * @description: 响应拦截
 */
servive.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;

    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode.default;
    if (code === 401) {
      return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === 500) {
      ElMessage({ message: msg, type: "error" });
      return Promise.reject(new Error(msg));
    } else if (code === 404) {
      ElMessage({ message: msg, type: "warning" });
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      ElNotification.error({ title: "系统错误请联系管理员" });
      return Promise.reject("error");
    }
    return Promise.resolve(res.data);
  },
  (error) => {
    let { message } = error;
    if (message === "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({ message: message, type: "error", duration: 3 * 1000 });
    return Promise.reject(error);
  },
);

export default servive;
