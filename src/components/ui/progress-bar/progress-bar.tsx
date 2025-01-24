import styles from "./styles.module.scss";

interface Props {
  width: number;
  height: number;
  progress: number;
  maxProgress: number;
}

export function ProgressBar({ width, height, progress, maxProgress }: Readonly<Props>) {
  const clampedProgress = Math.min(progress, maxProgress);

  return (
    <div className={styles.container} style={{ width, height }}>
      <div className={styles["progress-bar-shadow"]}>
        <div
          className={styles["progress-bar"]}
          style={{ width: `${(clampedProgress / maxProgress) * 100}%` }}
        />
      </div>
    </div>
  );
}
