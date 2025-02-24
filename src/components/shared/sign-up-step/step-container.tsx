import { SignUpForm, SignUpStep } from "@/type";
import { memo } from "react";
import {
  SelectGenderStep,
  SelectMbtiStep,
  TypeBirthDateStep,
  TypeBirthTimeStep,
  TypeNameStep,
} from "./step";

interface Props {
  currentStep: SignUpStep;
  form: SignUpForm;
  handleChange: (key: keyof SignUpForm, value: SignUpForm[keyof SignUpForm]) => void;
  goToNextStep: () => void;
}

function StepContainerBase({ currentStep, form, handleChange, goToNextStep }: Readonly<Props>) {
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
        <SelectGenderStep gender={form.gender} handleChange={handleChange} onNext={goToNextStep} />
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
      return <SelectMbtiStep handleChange={handleChange} />;
    default:
      return null;
  }
}

export const StepContainer = memo(StepContainerBase);
