import bubble from "@/assets/bubble.png";
import { QUESTIONS } from "@/lib/const";
import { SignUpStep } from "@/type";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  step: SignUpStep;
};

export function QuestionBox({ step }: Props) {
  return (
    <div className={styles["question-box"]}>
      <Image src={bubble} alt="bubble" className={styles.bubble} />
      <h1 className={styles.question}>{QUESTIONS[step]}</h1>
    </div>
  );
}
