import { useCallback, useState } from "react";

interface UseFunnelReturn<T> {
  currentStep: T;
  goToStep: (stepIndex: number) => void;
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export const useFunnel = <T extends string>(
  steps: T[],
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

  return {
    currentStep,
    goToStep,
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};
