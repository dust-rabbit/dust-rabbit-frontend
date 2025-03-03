export type MbtiValue = "E" | "I" | "S" | "N" | "T" | "F" | "P" | "J";

export type MbtiState = MbtiValue | undefined;

export type MbtiType = "M" | "B" | "T" | "I";

export type MbtiButtonInfo = {
  type: MbtiType;
  select1: { label: string; value: MbtiValue };
  select2: { label: string; value: MbtiValue };
};

export type FullMbti =
  | "ISTJ"
  | "ISFJ"
  | "INFJ"
  | "INTJ"
  | "ISTP"
  | "ISFP"
  | "INFP"
  | "INTP"
  | "ESTP"
  | "ESFP"
  | "ENFP"
  | "ENTP"
  | "ESTJ"
  | "ESFJ"
  | "ENFJ"
  | "ENTJ";

// TODO: MBTI 타입체커 구현
