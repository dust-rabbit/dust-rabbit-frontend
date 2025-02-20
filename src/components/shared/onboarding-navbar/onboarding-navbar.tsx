import { BackButton, ForwardButton, ProgressBar } from "@/components/ui";
import styles from "./styles.module.scss";

interface Props {
  stepIndex: number;
  totalSteps: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export function OnboardingNavbar({
  stepIndex,
  totalSteps,
  goToPreviousStep,
  goToNextStep,
}: Readonly<Props>) {
  const progress = stepIndex + 1;

  return (
    <div className={styles.container}>
      <div className={styles["back-forward-container"]}>
        {stepIndex === 0 && <div />}
        {stepIndex > 0 && <BackButton onClick={goToPreviousStep} />}
        <ForwardButton onClick={goToNextStep} />
      </div>
      <ProgressBar
        className={styles["progress-bar"]}
        progress={progress}
        maxProgress={totalSteps}
      />
      {/* <ProgressIndicator current={progress} total={totalSteps} /> */}
    </div>
  );
}
