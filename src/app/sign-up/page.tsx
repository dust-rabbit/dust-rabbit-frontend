"use client";

import { OnboardingNavbar, StepContainer } from "@/components/shared";
import { FormProvider, useForm, useFunnel } from "@/hooks";
import { DEFAULT_FORM, SIGN_UP_STEPS } from "@/lib/const";
import { SignUpForm, SignUpStep } from "@/type";

export default function SignUp() {
  const { currentStep, currentStepIndex, goToPreviousStep, goToNextStep } =
    useFunnel<SignUpStep>(SIGN_UP_STEPS);

  const { form, handleChange } = useForm<SignUpForm>(DEFAULT_FORM);

  return (
    <FormProvider>
      <OnboardingNavbar
        stepIndex={currentStepIndex}
        totalSteps={SIGN_UP_STEPS.length}
        goToPreviousStep={goToPreviousStep}
      />
      <StepContainer
        currentStep={currentStep}
        form={form}
        handleChange={handleChange}
        goToNextStep={goToNextStep}
      />
    </FormProvider>
  );
}
