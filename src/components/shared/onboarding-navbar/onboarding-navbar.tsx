import { BackButton, ForwardButton, ProgressBar } from "@/components/ui";
import { SIGN_UP_STEPS } from "@/lib/const";
import { submitIdForm } from "@/lib/utils";
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
      <div className={styles["back-forward-container"]}>
        {stepIndex === 0 && <div />}
        {stepIndex > 0 && <BackButton onClick={goToPreviousStep} />}
        <ForwardButton onClick={() => submitIdForm(SIGN_UP_STEPS[stepIndex])} />
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
