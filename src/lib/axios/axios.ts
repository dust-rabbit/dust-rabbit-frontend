import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// TODO: 인가, 인증을 위한 토큰 관련 interceptor 필요
