/**
 *不凡豆瓣电影接口系列
 * move模块接口列表
 */

import base from "./base.js"; // 导入公共请求头接口域名列表
import axios from "./http.js"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块

const move = {
  //电影250接口列表
  movie(params) {
    return axios.get(`${base.bufan}/douban/movie/top250`, { params });
  },
  // 电影详情列表
  moveDetail(id) {
    return axios.get(`${base.bufan}/douban/movie/subject`, { id });
  },
  // 登录接口
  login(params) {
    return axios.post(`${base.bufan}/test/user/doLogin`, qs.stringify(params), {
      withCredentials: true,
    });
  },
  //获取图片接口列表post
  getPicAPI(params) {
    return axios.post(`${base.bufan}/test/user/fileList`, params);
  },
  // 其他接口…………
};

export default move;
