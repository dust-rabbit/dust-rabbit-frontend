import { BackButton, ForwardButton, ProgressBar } from "@/components/ui";
import { useFormContext } from "@/hooks";
import { submitRefForm } from "@/lib/utils";
import styles from "./styles.module.scss";

type Props = {
  stepIndex: number;
  totalSteps: number;
  goToPreviousStep: () => void;
};

export function OnboardingNavbar({ stepIndex, totalSteps, goToPreviousStep }: Readonly<Props>) {
  const { currentStepFormRef, isFormValid } = useFormContext();
  const progress = stepIndex + 1;

  return (
    <div className={styles.container}>
      <div className={styles["back-forward-container"]}>
        {stepIndex === 0 && <div />}
        {stepIndex > 0 && <BackButton onClick={goToPreviousStep} />}
        {stepIndex < totalSteps - 1 && (
          <ForwardButton
            onClick={() => submitRefForm(currentStepFormRef)}
            disabled={!isFormValid}
          />
        )}
        {stepIndex === totalSteps && <div />}
      </div>
      <ProgressBar
        className={styles["progress-bar"]}
        progress={progress}
        maxProgress={totalSteps}
      />
    </div>
  );
}
