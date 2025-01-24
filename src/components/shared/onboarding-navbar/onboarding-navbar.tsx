import { ProgressBar, ProgressIndicator } from "@/components/ui";
import styles from "./styles.module.scss";

interface Props {
  progress: number;
  incrementProgress: () => void;
}

export function OnboardingNavbar({ progress, incrementProgress }: Readonly<Props>) {
  return (
    <>
      <div className={styles.container}>
        <ProgressBar width={200} height={30} progress={progress} maxProgress={4} />
        <ProgressIndicator current={progress} total={4} />
      </div>
      <button type="button" onClick={incrementProgress}>
        increment
      </button>
    </>
  );
}
