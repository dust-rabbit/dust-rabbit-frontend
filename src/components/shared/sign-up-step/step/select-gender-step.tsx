import { SelectButtons } from "@/components/ui";
import { useFormContext } from "@/hooks";
import { Gender, SignUpForm } from "@/type";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  gender: Gender | undefined;
  handleChange: (key: keyof SignUpForm, value: Gender | undefined) => void;
  onNext: () => void;
};

export function SelectGenderStep({ gender, handleChange, onNext }: Readonly<Props>) {
  const { currentStepFormRef, setIsFormValid } = useFormContext();
  const [selectedGender, setSelectedGender] = useState<Gender | undefined>(gender);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedGender) return;

    handleChange("gender", selectedGender);
    onNext();
  };

  useEffect(() => {
    setIsFormValid(!!selectedGender);
  }, [selectedGender, setIsFormValid]);

  return (
    <form ref={currentStepFormRef} className={styles.container} onSubmit={onSubmit}>
      <SelectButtons
        select1Value="여자"
        select2Value="남자"
        selected={selectedGender}
        onSelect1Click={() => setSelectedGender("여자")}
        onSelect2Click={() => setSelectedGender("남자")}
        onDuplicateClick={() => setSelectedGender(undefined)}
      />
    </form>
  );
}
