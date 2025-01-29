"use client";

import { useState } from "react";
import { XButton } from "@/components/ui";
import styles from "./styles.module.scss";

// TODO: zod로 사용자 입력 검증 추가
export default function Input() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
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
    </>
  );
}
