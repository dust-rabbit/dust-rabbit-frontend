import { useState } from "react";
import MbtiCard from "@/components/shared/mbti/mbti-card";
import { mbtiList } from "@/lib/const";
import { Mbti } from "@/type";
import styles from "./styles.module.scss";

export function MbtiCardContainer() {
  const [selectedMbti, setSelectedMbti] = useState<Mbti>(undefined);

  return (
    <div className={styles.grid}>
      {mbtiList.map((mbti) => (
        <MbtiCard
          key={mbti}
          mbti={mbti}
          selectedMbti={selectedMbti}
          setSelectedMbti={setSelectedMbti}
        />
      ))}
    </div>
  );
}
