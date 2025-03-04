import { axios } from "@/lib/axios";
import Axios from "axios";
import Cookies from "js-cookie";
import { LoginApi } from "@/type/api/user";

type GetLoginTokenApi = (params: { code: string }) => Promise<string>;

const loginAxios = Axios.create({
  baseURL: "https://kauth.kakao.com/oauth",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
});

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

const getLoginToken: GetLoginTokenApi = async ({ code }) => {
  const response = await loginAxios.post("/token", {
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code,
  });
  Cookies.set("id_token", response.data.id_token);
  return response.data.id_token;
};

const login: LoginApi = async (loginInfo) => {
  const response = await axios.post("/user/login", loginInfo);
  Cookies.set("access_token", response.data.accessToken);
  Cookies.set("refresh_token", response.data.refreshToken);
  return response.data.newUser;
};

export const loginApi = {
  getLoginToken,
  login,
};
