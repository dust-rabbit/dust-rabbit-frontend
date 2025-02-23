import { SelectButtons } from "@/components/ui";
import { Gender, SignUpForm } from "@/type";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  gender: Gender | undefined;
  handleChange: (key: keyof SignUpForm, value: Gender | undefined) => void;
  onNext: () => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  setIsFormValid: (isValid: boolean) => void;
}

export function SelectGenderStep({
  gender,
  handleChange,
  onNext,
  formRef,
  setIsFormValid,
}: Readonly<Props>) {
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
    <form ref={formRef} className={styles.container} onSubmit={onSubmit}>
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
