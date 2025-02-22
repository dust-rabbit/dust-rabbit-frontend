import { Button, SelectButtons } from "@/components/ui";
import { Gender, SignUpForm } from "@/type";
import { useState } from "react";

type Props = {
  gender: Gender | undefined;
  handleChange: (key: keyof SignUpForm, value: Gender | undefined) => void;
  onNext: () => void;
};

export function SelectGenderStep({ gender, handleChange, onNext }: Readonly<Props>) {
  const [selectedGender, setSelectedGender] = useState<Gender | undefined>(gender);

  return (
    <>
      <SelectButtons
        select1Value="여자"
        select2Value="남자"
        selected={selectedGender}
        onSelect1Click={() => setSelectedGender("여자")}
        onSelect2Click={() => setSelectedGender("남자")}
        onDuplicateClick={() => setSelectedGender(undefined)}
      />
      <Button
        onClick={() => {
          handleChange("gender", selectedGender);
          onNext();
        }}
        direction="bottom"
        variant={selectedGender ? "primary" : "disabled"}
      >
        다음
      </Button>
    </>
  );
}
