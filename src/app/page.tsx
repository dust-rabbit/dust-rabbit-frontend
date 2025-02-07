"use client";

import { Form, OnboardingNavbar } from "@/components/shared";
import { Button, DatePicker } from "@/components/ui";
import { useForm, useFunnel } from "@/hooks";
import { DEFAULT_FORM, SIGN_UP_STEPS } from "@/lib/const";
import { SignUpForm, SignUpStep } from "@/type";
import { useState } from "react";

export default function Home() {
  const { currentStep, currentStepIndex, goToPreviousStep, goToNextStep } =
    useFunnel<SignUpStep>(SIGN_UP_STEPS);

  const { handleChange } = useForm<SignUpForm>(DEFAULT_FORM);

  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const years = Array.from({ length: 100 }, (_, i) => 1950 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

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
      <div>
        {year}년 {month}월 {day}일
      </div>
      <div style={{ display: "flex", gap: "10px", width: "100%" }}>
        <DatePicker
          values={years}
          onValueChange={(value) => setYear(value)}
          selectedValue={year}
          suffix="년"
        />
        <DatePicker
          values={months}
          onValueChange={(value) => setMonth(value)}
          selectedValue={month}
          suffix="월"
        />
        <DatePicker
          values={days}
          onValueChange={(value) => setDay(value)}
          selectedValue={day}
          suffix="일"
        />
      </div>
      {/* <div>name: {form.name}</div>
      <div>gender: {form.gender}</div>
      <div>birthDate: {form.birthDate}</div>
      <div>birthTime: {form.birthTime}</div>
      <div>mbti: {form.mbti}</div> */}
    </>
  );
}
