import { Mbti } from "@/type";
import styles from "./styles.module.scss";

type Props = {
  mbti: Mbti;
  selectedMbti: Mbti;
  setSelectedMbti: (mbti: Mbti) => void;
};

export default function MbtiCard({ mbti, selectedMbti, setSelectedMbti }: Readonly<Props>) {
  return (
    <button
      type="button"
      className={mbti === selectedMbti ? styles.selected : styles.unselected}
      onClick={() => setSelectedMbti(mbti === selectedMbti ? undefined : mbti)}
    >
      <p>{mbti}</p>
    </button>
  );
}
