import { SelectButtons } from "@/components/ui";
import { Gender, SignUpForm } from "@/type";
import { useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  gender: Gender | undefined;
  handleChange: (key: keyof SignUpForm, value: Gender | undefined) => void;
  onNext: () => void;
};

export function SelectGenderStep({ gender, handleChange, onNext }: Readonly<Props>) {
  const [selectedGender, setSelectedGender] = useState<Gender | undefined>(gender);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedGender) return;

    handleChange("gender", selectedGender);
    onNext();
  };

  return (
    <form id="성별 선택" className={styles.container} onSubmit={onSubmit}>
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
