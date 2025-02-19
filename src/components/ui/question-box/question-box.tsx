import { QUESTIONS } from "@/lib/const";
import { SignUpStep } from "@/type";
import styles from "./styles.module.scss";

type Props = {
  step: SignUpStep;
};

export function QuestionBox({ step }: Props) {
  return (
    <div className={styles["question-box"]}>
      {/* <Image src={bubble} alt="bubble" className={styles.bubble} /> */}
      {QUESTIONS[step].map((question) => (
        <h1 key={question} className={styles.question}>
          {question}
        </h1>
      ))}
    </div>
  );
}
