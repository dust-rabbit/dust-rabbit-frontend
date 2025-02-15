export type Gender = "남자" | "여자";

export type SignUpForm = {
  gender: Gender | undefined;
  name: string;
  birthDate: string;
  birthTime: string | undefined;
  mbti: string;
};
