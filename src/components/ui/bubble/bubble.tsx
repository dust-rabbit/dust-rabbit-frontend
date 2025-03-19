import SpeakBubble from "@/assets/speak-bubble.svg";
import styles from "./styles.module.scss";

type Props = {
  speech: readonly string[];
  withTail?: boolean;
};

export function Bubble({ speech, withTail = false }: Props) {
  if (withTail)
    return (
      <div className={styles["bubble-container"]}>
        <SpeakBubble className={styles["speak-bubble"]} />
        {speech.map((s) => (
          <h2 key={s} className={styles.question}>
            {s}
          </h2>
        ))}
      </div>
    );
  return (
    <div className={styles.bubble}>
      {speech.map((s) => (
        <h1 key={s} className={styles.question}>
          {s}
        </h1>
      ))}
    </div>
  );
}
