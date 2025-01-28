"use client";

import XButton from "@/components/ui/button/x-button";
import { useState } from "react";
import styles from "./styles.module.scss";

// TODO: zod로 사용자 입력 검증 추가
export function Input() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        placeholder="placeholder"
        className={styles.default}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <XButton
        inputValue={inputValue}
        onClear={() => {
          setInputValue("");
        }}
      />
    </>
  );
}
