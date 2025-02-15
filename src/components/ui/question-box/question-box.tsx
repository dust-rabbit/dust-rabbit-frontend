import Image from "next/image";
import bubble from "@/assets/bubble.png";
import { SignUpStep } from "@/type";
import { QUESTIONS } from "@/lib/const";
import styles from "./styles.module.scss";

type Props = {
  step: SignUpStep;
};

export function QuestionBox({ step }: Props) {
  return (
    <div className={styles["question-box"]}>
      <Image src={bubble} alt="bubble" className={styles.bubble} />
      <h1 className={styles.question}>
        {step === "이름 입력" && QUESTIONS[0]}
        {step === "성별 선택" && QUESTIONS[1]}
        {step === "생년월일 입력" && QUESTIONS[2]}
        {step === "출생시간 입력" && QUESTIONS[3]}
        {step === "MBTI 입력" && QUESTIONS[4]}
      </h1>
    </div>
  );
}
