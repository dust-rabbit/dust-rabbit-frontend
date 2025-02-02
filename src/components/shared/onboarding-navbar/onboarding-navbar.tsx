import { PageBackButton, ProgressBar, ProgressIndicator } from "@/components/ui";
import styles from "./styles.module.scss";

interface Props {
  stepIndex: number;
  totalSteps: number;
  goToPreviousStep: () => void;
}

export function OnboardingNavbar({ stepIndex, totalSteps, goToPreviousStep }: Readonly<Props>) {
  const progress = stepIndex + 1;

  return (
    <div className={styles.container}>
      <PageBackButton onClick={goToPreviousStep} />
      <ProgressBar
        className={styles["progress-bar"]}
        progress={progress}
        maxProgress={totalSteps}
      />
      <ProgressIndicator current={progress} total={totalSteps} />
    </div>
  );
}
