import styles from "./styles.module.scss";

interface Props {
  className?: string;
  progress: number;
  maxProgress: number;
}

export function ProgressBar({ className, progress, maxProgress }: Readonly<Props>) {
  const clampedProgress = Math.min(progress, maxProgress);

  return (
    <div className={className}>
      <div className={styles["progress-bar-shadow"]}>
        <div
          className={styles["progress-bar"]}
          style={{ width: `${(clampedProgress / maxProgress) * 100}%` }}
        />
      </div>
    </div>
  );
}
