"use client";

import { Form, OnboardingNavbar } from "@/components/shared";
import { Button } from "@/components/ui";
import { useFunnel } from "@/hooks";
import { SIGN_UP_STEPS } from "@/lib/const";
import { SignUpStep } from "@/type";

export default function Home() {
  const { currentStep, goToStep, currentStepIndex } = useFunnel<SignUpStep>(SIGN_UP_STEPS);

  const goToNextStep = () => {
    goToStep(currentStepIndex + 1);
  };

  return (
    <>
      <OnboardingNavbar stepIndex={currentStepIndex} totalSteps={SIGN_UP_STEPS.length} />
      <button type="button" onClick={goToNextStep}>
        increment
      </button>
      {currentStep}
      <div className="row">
        <Button>여자</Button>
        <Button>남자</Button>
      </div>
      <Button>다음</Button>
      <Form />
    </>
  );
}
