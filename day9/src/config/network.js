// config/network.js
// 통신 http 데이터를 받아오고 넣는 작업을 할거다
//  url, method, body
// 자바스크립트

import axios from "axios";
//async 비동기 함수

export const api = async (url, method, body) => {
  // http://localhost:5173/
  axios.defaults.baseURL = "http://192.168.80.4:4000";
  const res = await axios({
    url,
    method,
    data: body,
  });
  console.log(res);
  console.log("asdsa");

  return res;
};
