"use client";

import { XButton } from "@/components/ui";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

// TODO: zod로 사용자 입력 검증 추가
// 현재는 Input만 submit하는 폼입니다. 나중에 여러 정보를 submit하게 되면 보강할 예정
export function Form() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles.default}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        placeholder="이름"
        className={styles.input}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        ref={inputRef}
      />
      <XButton
        inputValue={inputValue}
        onClear={() => {
          setInputValue("");
          inputRef.current?.focus();
        }}
      />
    </form>
  );
}
