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
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === totalSteps - 1;
  const isSigninStep = stepIndex < totalSteps - 1;
  const isProgressedStep = stepIndex > 0;

  return (
    <div className={styles.container}>
      <div className={styles["back-forward-container"]}>
        {isFirstStep && <div />}
        {isProgressedStep && <BackButton onClick={goToPreviousStep} />}
        {isSigninStep && (
          <ForwardButton
            onClick={() => submitRefForm(currentStepFormRef)}
            disabled={!isFormValid}
          />
        )}
        {isLastStep && <div />}
      </div>
      <ProgressBar
        className={styles["progress-bar"]}
        progress={progress}
        maxProgress={totalSteps}
      />
    </div>
  );
}
