import styles from "./styles.module.scss";

type Props = {
  speech: readonly string[];
};

export function Bubble({ speech }: Props) {
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
