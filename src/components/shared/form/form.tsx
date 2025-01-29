"use client";

import { useState } from "react";
import { XButton } from "@/components/ui";
import styles from "./styles.module.scss";

// TODO: zod로 사용자 입력 검증 추가
// 현재는 Input만 submit하는 폼입니다. 나중에 여러 정보를 submit하게 되면 보강할 예정
export function Form() {
  const [inputValue, setInputValue] = useState("");
  return (
    <form className={styles.default} onSubmit={() => console.log("submitted.")}>
      <input
        placeholder="placeholder"
        className={styles.input}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <XButton
        inputValue={inputValue}
        onClear={() => {
          setInputValue("");
        }}
      />
    </form>
  );
}
