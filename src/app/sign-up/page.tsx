"use client";

import munto from "@/assets/mt-question.png";
import { OnboardingNavbar, StepContainer } from "@/components/shared";
import { Bubble } from "@/components/ui";
import { useForm, useFunnel } from "@/hooks";
import { DEFAULT_FORM, QUESTIONS, SIGN_UP_STEPS } from "@/lib/const";
import { SignUpForm, SignUpStep } from "@/type";
import Image from "next/image";
import { useRef, useState } from "react";

export default function SignUp() {
  const { currentStep, currentStepIndex, goToPreviousStep, goToNextStep } =
    useFunnel<SignUpStep>(SIGN_UP_STEPS);

  const { form, handleChange } = useForm<SignUpForm>(DEFAULT_FORM);

  const stepFormRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <>
      <OnboardingNavbar
        stepIndex={currentStepIndex}
        totalSteps={SIGN_UP_STEPS.length}
        goToPreviousStep={goToPreviousStep}
        formRef={stepFormRef}
        isFormValid={isFormValid}
      />
      <Bubble speech={QUESTIONS[currentStep]} />
      <Image src={munto} alt="munto" />
      <StepContainer
        currentStep={currentStep}
        form={form}
        handleChange={handleChange}
        goToNextStep={goToNextStep}
        formRef={stepFormRef}
        setIsFormValid={setIsFormValid}
      />
    </>
  );
}
