export type MbtiValue = "E" | "I" | "S" | "N" | "T" | "F" | "P" | "J";

export type MbtiState = MbtiValue | undefined;

export type MbtiType = "M" | "B" | "T" | "I";

export type MbtiButtonInfo = {
  type: MbtiType;
  select1: { label: string; value: MbtiValue };
  select2: { label: string; value: MbtiValue };
};
