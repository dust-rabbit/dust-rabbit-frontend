export type SignUpForm = {
  gender: "male" | "female" | undefined;
  name: string;
  birthDate: string;
  birthTime?: string;
  mbti: string;
};
