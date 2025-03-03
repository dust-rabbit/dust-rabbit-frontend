import { MbtiButtonInfo, FullMbti } from "@/type";

export const MBTI_BUTTONS: readonly MbtiButtonInfo[] = [
  {
    type: "M",
    select1: { label: "E(외향)", value: "E" },
    select2: { label: "I(내향)", value: "I" },
  },
  {
    type: "B",
    select1: { label: "S(감각)", value: "S" },
    select2: { label: "N(직관)", value: "N" },
  },
  {
    type: "T",
    select1: { label: "T(사고)", value: "T" },
    select2: { label: "F(감정)", value: "F" },
  },
  {
    type: "I",
    select1: { label: "P(인식)", value: "P" },
    select2: { label: "J(판단)", value: "J" },
  },
] as const;

Object.freeze(MBTI_BUTTONS);

export const PERSONALITY: Record<FullMbti, string> = {
  ISTJ: "체계적인 성향",
  ISFJ: "헌신적인 성향",
  INFJ: "이상주의적인 성향",
  INTJ: "분석적인 성향",
  ISTP: "냉철한 성향",
  ISFP: "온화한 성향",
  INFP: "공감적인 성향",
  INTP: "논리적인 성향",
  ESTP: "직설적인 성향",
  ESFP: "활발한 성향",
  ENFP: "열정적인 성향",
  ENTP: "도전적인 성향",
  ESTJ: "단호한 성향",
  ESFJ: "화합적인 성향",
  ENFJ: "사람 중심적인 성향",
  ENTJ: "주도적인 성향",
} as const;

Object.freeze(PERSONALITY);
