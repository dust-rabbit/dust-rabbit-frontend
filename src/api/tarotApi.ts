import { axios } from "@/lib/axios/axios";
import { GetDailyTarotApi, PostDailyTarotApi } from "@/type/api/tarot";

const getDailyTarot: GetDailyTarotApi = async ({ date }) => {
  const response = await axios.get(`/daily/tarot/${date}`);
  return response.status;
};

const postDailyTarot: PostDailyTarotApi = async ({ tarot1, tarot2, tarot3 }) => {
  const response = await axios.post("/daily/tarot", { tarot1, tarot2, tarot3 });
  return response.data;
};

export const tarotApi = {
  getDailyTarot,
  postDailyTarot,
};
