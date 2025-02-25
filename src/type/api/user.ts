import { SignUpForm } from "@/type";

export type OnboardUserApiParams = {
  onboardingInfo: SignUpForm;
};
export type OnboardUserApi = ({ onboardingInfo }: OnboardUserApiParams) => Promise<number>;

export type SocialType = "KAKAO";
export type LoginApiResponse = {
  newUser: boolean;
  accessToken: string;
  refreshToken: string;
};
export type LoginApiParams = {
  loginInfo: { socialType: SocialType; idToken: string };
};
export type LoginApi = ({ loginInfo }: LoginApiParams) => Promise<LoginApiResponse | number>;

export type DeleteUserApi = () => Promise<number>;
