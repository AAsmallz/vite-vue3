/** 封装axios, 配置登录鉴权 */
import axios from 'axios';
import { getToken } from '@/utils/auth';
import { Message } from 'element3';

export const http = axios.create({
  baseURL: '/', // 请求的源
  timeout: 5000 // request timeout
});

http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Beadrer ${token}`;
  }
  return config;
});

http.interceptors.response.use((response) => {
  const res = response.data;
  console.log('(response', res.code);
  if (res.code === 401) {
    Message({
      type: 'warning',
      message: '登录失效, 请重新登录'
    });
    return Promise.reject(new Error('Error'));
  }
  if (res.code !== 20000) {
    return res;
  }
  if (res.code == 20000) {
    return res;
  }
});

export default http;
