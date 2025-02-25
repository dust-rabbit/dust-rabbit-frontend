import { Fortune } from "@/type/fortune";

export type GetDailyTarotApiParams = string;
export type GetDailyTarotApi = (date: GetDailyTarotApiParams) => Promise<number>;

export type PostDailyTarotApiParams = {
  tarot1: number;
  tarot2: number;
  tarot3: number;
};
export type PostDailyTarotApiResponse = {
  fortune: Fortune;
};
export type PostDailyTarotApi = ({
  tarot1,
  tarot2,
  tarot3,
}: PostDailyTarotApiParams) => Promise<PostDailyTarotApiResponse>;
