"use client";

import { Form, OnboardingNavbar, MbtiCardContainer, TypeBirthDateStep } from "@/components/shared";
import { Button, QuestionBox } from "@/components/ui";
import { useForm, useFunnel } from "@/hooks";
import { DEFAULT_FORM, SIGN_UP_STEPS } from "@/lib/const";
import { SignUpForm, SignUpStep } from "@/type";
import Image from "next/image";
import munto from "@/assets/mt-question.png";

export default function Home() {
  const { currentStep, currentStepIndex, goToPreviousStep, goToNextStep } =
    useFunnel<SignUpStep>(SIGN_UP_STEPS);

  const { handleChange } = useForm<SignUpForm>(DEFAULT_FORM);

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
        <div className="row">
          <Button onClick={() => handleChange("gender", "여자")}>여자</Button>
          <Button onClick={() => handleChange("gender", "남자")}>남자</Button>
        </div>
      )}
      {currentStep === "이름 입력" && <Form />}
      {currentStep === "생년월일 입력" && <TypeBirthDateStep />}
      {currentStep === "출생시간 입력" && <Form />}
      {currentStep === "MBTI 입력" && <MbtiCardContainer />}
      <Button onClick={goToNextStep}>다음</Button>
    </>
  );
}
