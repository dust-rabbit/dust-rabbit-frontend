import { SignUpForm, SignUpStep } from "@/type";

export const SIGN_UP_STEPS: SignUpStep[] = [
  "성별 선택",
  "이름 입력",
  "생년월일 입력",
  "출생시간 입력",
  "MBTI 입력",
];

export const DEFAULT_FORM: SignUpForm = {
  gender: undefined,
  name: "",
  birthDate: "",
  birthTime: undefined,
  mbti: "",
};
