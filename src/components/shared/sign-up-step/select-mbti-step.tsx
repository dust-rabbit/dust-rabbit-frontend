"use client";

import { Button, SelectButtons } from "@/components/ui";
import { SignUpForm } from "@/type";
import { useState } from "react";
import styles from "./styles.module.scss";

type M = "E" | "I" | undefined;
type B = "S" | "N" | undefined;
type T = "T" | "F" | undefined;
type I = "P" | "J" | undefined;

type Props = {
  handleChange: (key: keyof SignUpForm, value: string) => void;
};

export function SelectMbtiStep({ handleChange }: Readonly<Props>) {
  const [typeM, setTypeM] = useState<M>(undefined);
  const [typeB, setTypeB] = useState<B>(undefined);
  const [typeT, setTypeT] = useState<T>(undefined);
  const [typeI, setTypeI] = useState<I>(undefined);

  const isDisabled = !typeM || !typeB || !typeT || !typeI;

  return (
    <div className={styles["mbti-container"]}>
      <SelectButtons
        select1Label="E(외향)"
        select1Value="E"
        select2Label="I(내향)"
        select2Value="I"
        selected={typeM}
        onSelect1Click={() => setTypeM("E")}
        onSelect2Click={() => setTypeM("I")}
        onDuplicateClick={() => setTypeM(undefined)}
      />
      <SelectButtons
        select1Label="S(감각)"
        select1Value="S"
        select2Label="N(직관)"
        select2Value="N"
        selected={typeB}
        onSelect1Click={() => setTypeB("S")}
        onSelect2Click={() => setTypeB("N")}
        onDuplicateClick={() => setTypeB(undefined)}
      />
      <SelectButtons
        select1Label="T(사고)"
        select1Value="T"
        select2Label="F(감정)"
        select2Value="F"
        selected={typeT}
        onSelect1Click={() => setTypeT("T")}
        onSelect2Click={() => setTypeT("F")}
        onDuplicateClick={() => setTypeT(undefined)}
      />
      <SelectButtons
        select1Label="P(인식)"
        select1Value="P"
        select2Label="J(판단)"
        select2Value="J"
        selected={typeI}
        onSelect1Click={() => setTypeI("P")}
        onSelect2Click={() => setTypeI("J")}
        onDuplicateClick={() => setTypeI(undefined)}
      />
      <Button
        onClick={() => {
          const mbti = `${typeM}${typeB}${typeT}${typeI}`;
          handleChange("mbti", mbti);
        }}
        direction="bottom"
        variant={isDisabled ? "disabled" : "primary"}
      >
        시작하기
      </Button>
    </div>
  );
}
