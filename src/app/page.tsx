"use client";

import { Form, OnboardingNavbar } from "@/components/shared";
import { Button } from "@/components/ui";
import { useForm, useFunnel } from "@/hooks";
import { DEFAULT_FORM, SIGN_UP_STEPS } from "@/lib/const";
import { SignUpForm, SignUpStep } from "@/type";

export default function Home() {
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
      <Button onClick={goToNextStep}>increment</Button>
      {currentStep === "성별 선택" && (
        <div className="row">
          <Button onClick={() => handleChange("gender", "여자")}>여자</Button>
          <Button onClick={() => handleChange("gender", "남자")}>남자</Button>
        </div>
      )}
      {currentStep === "이름 입력" && <Form />}
      {currentStep === "생년월일 입력" && <Form />}
      {currentStep === "출생시간 입력" && <Form />}
      {currentStep === "MBTI 입력" && <Form />}
      {currentStep}
      <div>name: {form.name}</div>
      <div>gender: {form.gender}</div>
      <div>birthDate: {form.birthDate}</div>
      <div>birthTime: {form.birthTime}</div>
      <div>mbti: {form.mbti}</div>
    </>
  );
}
