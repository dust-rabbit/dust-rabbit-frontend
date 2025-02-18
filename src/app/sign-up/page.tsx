"use client";

import munto from "@/assets/mt-question.png";
import { OnboardingNavbar, StepContainer } from "@/components/shared";
import { QuestionBox } from "@/components/ui";
import { useForm, useFunnel } from "@/hooks";
import { DEFAULT_FORM, SIGN_UP_STEPS } from "@/lib/const";
import { SignUpForm, SignUpStep } from "@/type";
import Image from "next/image";

export default function SignUp() {
  const { currentStep, currentStepIndex, goToPreviousStep, goToNextStep } =
    useFunnel<SignUpStep>(SIGN_UP_STEPS);

  const { form, handleChange } = useForm<SignUpForm>(DEFAULT_FORM);

  return (
    <>
      <OnboardingNavbar
        stepIndex={currentStepIndex}
        totalSteps={SIGN_UP_STEPS.length}
        goToPreviousStep={goToPreviousStep}
      />
      <QuestionBox step={currentStep} />
      <Image src={munto} alt="munto" />
      <StepContainer
        currentStep={currentStep}
        form={form}
        handleChange={handleChange}
        goToNextStep={goToNextStep}
      />
    </>
  );
}
