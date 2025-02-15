"use client";

import { Form, OnboardingNavbar, MbtiCardContainer, TypeBirthDateStep } from "@/components/shared";
import { Button, QuestionBox, SelectButtons } from "@/components/ui";
import { useForm, useFunnel } from "@/hooks";
import { DEFAULT_FORM, SIGN_UP_STEPS } from "@/lib/const";
import { SignUpForm, SignUpStep } from "@/type";
import Image from "next/image";
import munto from "@/assets/mt-question.png";

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
      <QuestionBox step={currentStep} />
      <Image src={munto} alt="munto" />
      {currentStep === "성별 선택" && (
        <SelectButtons
          select1="여자"
          select2="남자"
          selected={form.gender}
          onSelect1Click={() => handleChange("gender", "여자")}
          onSelect2Click={() => handleChange("gender", "남자")}
          onDuplicateClick={() => handleChange("gender", undefined)}
        />
      )}
      {currentStep === "이름 입력" && <Form />}
      {currentStep === "생년월일 입력" && <TypeBirthDateStep />}
      {currentStep === "출생시간 입력" && <Form />}
      {currentStep === "MBTI 입력" && <MbtiCardContainer />}
      <Button onClick={goToNextStep} direction="bottom">
        다음
      </Button>
    </>
  );
}
