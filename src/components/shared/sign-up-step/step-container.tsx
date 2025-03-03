import { SignUpForm, SignUpStep } from "@/type";
import { memo } from "react";
import { QUESTIONS } from "@/lib/const";
import Image from "next/image";
import { Bubble } from "@/components/ui";
import munto from "@/assets/mt-question.png";
import {
  SelectGenderStep,
  SelectMbtiStep,
  TypeBirthDateStep,
  TypeBirthTimeStep,
  TypeNameStep,
  ReviewInfoStep,
} from "./step";

type Props = {
  currentStep: SignUpStep;
  form: SignUpForm;
  handleChange: (key: keyof SignUpForm, value: SignUpForm[keyof SignUpForm]) => void;
  goToNextStep: () => void;
};

function StepContainerBase({ currentStep, form, handleChange, goToNextStep }: Readonly<Props>) {
  const renderStep = () => {
    switch (currentStep) {
      case "이름 입력":
        return (
          <TypeNameStep
            value={form.name}
            onSubmit={(value) => handleChange("name", value)}
            onNext={goToNextStep}
          />
        );
      case "성별 선택":
        return (
          <SelectGenderStep
            gender={form.gender}
            handleChange={handleChange}
            onNext={goToNextStep}
          />
        );
      case "생년월일 입력":
        return (
          <TypeBirthDateStep
            value={{ date: form.birthDate, calendarType: form.calendarType }}
            onSubmit={(value) => {
              handleChange("birthDate", value.date);
              handleChange("calendarType", value.calendarType);
            }}
            onNext={goToNextStep}
          />
        );
      case "출생시간 입력":
        return (
          <TypeBirthTimeStep
            value={form.birthTime}
            onSubmit={(value) => handleChange("birthTime", value)}
            onNext={goToNextStep}
          />
        );
      case "MBTI 입력":
        return <SelectMbtiStep handleChange={handleChange} onNext={goToNextStep} />;
      case "정보 확인":
        return <ReviewInfoStep form={form} />;
      default:
        return null;
    }
  };

  return (
    <>
      {currentStep !== "정보 확인" && (
        <>
          <Bubble speech={QUESTIONS[currentStep]} />
          <Image src={munto} alt="munto" />
        </>
      )}
      {renderStep()}
    </>
  );
}

export const StepContainer = memo(StepContainerBase);
