import { SignUpForm, SignUpStep } from "@/type";

export const SIGN_UP_STEPS: readonly SignUpStep[] = [
  "이름 입력",
  "성별 선택",
  "생년월일 입력",
  "출생시간 입력",
  "MBTI 입력",
];
Object.freeze(SIGN_UP_STEPS);

export const DEFAULT_FORM: Readonly<SignUpForm> = {
  gender: undefined,
  name: "",
  birthDate: "",
  birthTime: undefined,
  mbti: "",
};
Object.freeze(DEFAULT_FORM);
