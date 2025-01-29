"use client";

import Input from "./input";
import styles from "./styles.module.scss";

// 현재는 Input만 submit하는 폼입니다. 나중에 여러 정보를 submit하게 되면 보강할 예정
export function Form() {
  return (
    <form className={styles.default} onSubmit={() => console.log("submitted.")}>
      <Input />
    </form>
  );
}
