"use client";

import { SelectButtons } from "@/components/ui";
import { MBTI_BUTTONS } from "@/lib/const";
import { MbtiState, SignUpForm } from "@/type";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  handleChange: (key: keyof SignUpForm, value: string) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  setIsFormValid: (isValid: boolean) => void;
};

export function SelectMbtiStep({ handleChange, formRef, setIsFormValid }: Readonly<Props>) {
  const [typeM, setTypeM] = useState<MbtiState>(undefined);
  const [typeB, setTypeB] = useState<MbtiState>(undefined);
  const [typeT, setTypeT] = useState<MbtiState>(undefined);
  const [typeI, setTypeI] = useState<MbtiState>(undefined);

  const mbtiStates = {
    M: [typeM, setTypeM],
    B: [typeB, setTypeB],
    T: [typeT, setTypeT],
    I: [typeI, setTypeI],
  } as const;

  const isDisabled = !typeM || !typeB || !typeT || !typeI;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabled) return;

    const mbti = `${typeM}${typeB}${typeT}${typeI}`;
    handleChange("mbti", mbti);
  };

  useEffect(() => {
    setIsFormValid(!!typeM && !!typeB && !!typeT && !!typeI);
  }, [typeM, typeB, typeT, typeI, setIsFormValid]);

  return (
    <form ref={formRef} className={styles["mbti-container"]} onSubmit={onSubmit}>
      {MBTI_BUTTONS.map((button) => {
        const [selected, setSelected] = mbtiStates[button.type];
        return (
          <SelectButtons
            key={button.type}
            select1Label={button.select1.label}
            select1Value={button.select1.value}
            select2Label={button.select2.label}
            select2Value={button.select2.value}
            selected={selected}
            onSelect1Click={() => setSelected(button.select1.value)}
            onSelect2Click={() => setSelected(button.select2.value)}
            onDuplicateClick={() => setSelected(undefined)}
          />
        );
      })}
    </form>
  );
}
