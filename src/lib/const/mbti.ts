import { MbtiButtonInfo } from "@/type";

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
