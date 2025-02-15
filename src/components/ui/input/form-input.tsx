"use client";

import { XButton } from "@/components/ui/button/x-button";
import { forwardRef, useRef } from "react";
import styles from "./styles.module.scss";

// TODO: zod로 사용자 입력 검증 추가
// 현재는 Input만 submit하는 폼입니다. 나중에 여러 정보를 submit하게 되면 보강할 예정

/* eslint-disable react/require-default-props */
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  name?: string;
};
/* eslint-enable react/require-default-props */

export const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ onChange, onBlur, placeholder, value, name }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || innerRef;

    return (
      <div className={styles.default}>
        <input
          placeholder={placeholder}
          className={styles.input}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={inputRef}
          name={name}
        />
        <XButton
          inputValue={value}
          onClear={() => {
            const event = {
              target: { value: "" },
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
            inputRef.current?.focus();
          }}
        />
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
