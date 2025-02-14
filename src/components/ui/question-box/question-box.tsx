import { SignUpStep } from "@/type";
import bubble from "@/assets/bubble.png";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  step: SignUpStep;
};

export function QuestionBox({ step }: Props) {
  return (
    <div className={styles["question-box"]}>
      <Image src={bubble} alt="bubble" className={styles.bubble} />
      <h1 className={styles.question}>
        {step === "이름 입력" && "반가워! 너 이름이 뭐야?"}
        {step === "성별 선택" && "너의 성별을 알려줘!"}
        {step === "생년월일 입력" && "너의 생일은 언제야?"}
        {step === "출생시간 입력" && "혹시 태어난 시간도 알고 있어?"}
        {step === "MBTI 입력" && "마지막이야! MBTI가 궁금해"}
      </h1>
    </div>
  );
}
