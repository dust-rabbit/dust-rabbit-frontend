import { PageBackButton, ProgressBar, ProgressIndicator } from "@/components/ui";
import styles from "./styles.module.scss";

interface Props {
  stepIndex: number;
  totalSteps: number;
}

export function OnboardingNavbar({ stepIndex, totalSteps }: Readonly<Props>) {
  const progress = stepIndex + 1;

  return (
    <div className={styles.container}>
      <PageBackButton />
      <ProgressBar
        className={styles["progress-bar"]}
        progress={progress}
        maxProgress={totalSteps}
      />
      <ProgressIndicator current={progress} total={totalSteps} />
    </div>
  );
}
