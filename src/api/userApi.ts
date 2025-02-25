import { axios } from "@/lib/axios/axios";
import { OnboardUserApi, LoginApi, DeleteUserApi } from "@/type/api/user";

const onboardUser: OnboardUserApi = async ({ onboardingInfo }) => {
  const response = await axios.put("/user/onboarding", onboardingInfo);
  return response.status;
};

const login: LoginApi = async ({ loginInfo }) => {
  const response = await axios.post("/user/login", loginInfo);
  if (response.status === 200) return response.data;
  return response.status;
};

const deleteUser: DeleteUserApi = async () => {
  const response = await axios.delete("/user/account");
  return response.status;
};

export const userApi = {
  onboardUser,
  login,
  deleteUser,
};
