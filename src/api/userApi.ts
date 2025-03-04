import { axios } from "@/lib/axios";
import { OnboardUserApi, DeleteUserApi } from "@/type/api/user";

const onboardUser: OnboardUserApi = async (onboardingInfo) => {
  const response = await axios.put("/user/onboarding", onboardingInfo);
  return response.status;
};

const deleteUser: DeleteUserApi = async () => {
  const response = await axios.delete("/user/account");
  return response.status;
};

export const userApi = {
  onboardUser,
  deleteUser,
};
