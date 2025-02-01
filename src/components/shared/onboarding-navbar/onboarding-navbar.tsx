import { PageBackButton, ProgressBar, ProgressIndicator } from "@/components/ui";
import styles from "./styles.module.scss";

interface Props {
  progress: number;
  incrementProgress: () => void;
  maxProgress: number;
}

export function OnboardingNavbar({ progress, incrementProgress, maxProgress }: Readonly<Props>) {
  return (
    <>
      <div className={styles.container}>
        <PageBackButton />
        <ProgressBar
          className={styles["progress-bar"]}
          progress={progress}
          maxProgress={maxProgress}
        />
        <ProgressIndicator current={progress} total={maxProgress} />
      </div>
      <button type="button" onClick={incrementProgress}>
        increment
      </button>
    </>
  );
}
