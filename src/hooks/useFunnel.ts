import { useCallback, useState } from "react";

interface UseFunnelReturn<T> {
  currentStep: T;
  goToStep: (stepIndex: number) => void;
  currentStepIndex: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export const useFunnel = <T extends string>(
  steps: readonly T[],
  initialStep: T = steps[0],
): UseFunnelReturn<T> => {
  const [currentStep, setCurrentStep] = useState<T>(initialStep);
  const currentStepIndex = steps.indexOf(currentStep);

  const goToStep = useCallback(
    (stepIndex: number) => {
      if (stepIndex >= 0 && stepIndex < steps.length) {
        setCurrentStep(steps[stepIndex]);
      }
    },
    [steps],
  );

  const goToPreviousStep = useCallback(() => {
    goToStep(currentStepIndex - 1);
  }, [goToStep, currentStepIndex]);

  const goToNextStep = useCallback(() => {
    goToStep(currentStepIndex + 1);
  }, [goToStep, currentStepIndex]);

  return {
    currentStep,
    goToStep,
    currentStepIndex,
    goToPreviousStep,
    goToNextStep,
  };
};
