/**
 *不凡豆瓣电影接口系列
 * move模块接口列表
 */

import base from "./base.js"; // 导入公共请求头接口域名列表
import axios from "./http.js"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块

const blog = {
 
  // 登录接口
  login(params) {
    return axios.post(`${base.bufan}/test/user/doLogin`, qs.stringify(params), {
      withCredentials: true,
    });
  },
  // 注册博主接口
  register(params){
	  return axios.post(`${base.blog}/add`, qs.stringify(params), {
	    withCredentials: true,
	  });
  },
  //获取图片接口列表post
  getPicAPI(params) {
    return axios.post(`${base.bufan}/test/user/fileList`, params);
  },
  // 其他接口…………
};

export default blog;
