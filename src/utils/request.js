import axios from 'axios';
import { Loading } from 'element-ui';
// 封装lodaing加载
const loading = {
  loadingInstance: null,
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = Loading.service({
        target: ".main",
        text: "正在加载中",
        background: "rgba(0,0,0,0.5)"
      });
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close();
    }
    this.loadingInstance = null;
  }
}
// 创建axios实例，在axios实例里面可以自定义一些请求的选项
const req = axios.create({
  // 设置公共路径
  baseURL: "",
  timeout: 5000
})

// 请求拦截器
req.interceptors.request.use(
  config => {
    // // 进行loading加载
    // 
    // store.state.Loading = true
    const token = localStorage.getItem("yy_token") ? localStorage.getItem("yy_token") : "";

    //发送token
    config.headers.Authorization = "Bearer " + token;
    loading.open();
    return config;
  },
  error => {
    loading.close();
    return Promise.error(error);

  }
);
// 响应
req.interceptors.response.use(
  response => {
    loading.close();
    // console.log(response)
    // setTimeout(()=>{
    // },2000)

    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      // store.state.Loading = false
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);

    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    loading.close();
    // if (error.response.status) {
    return Promise.reject(error);
    // }/
  }
);

//   Vue.prototype.$axios = axios
export default req