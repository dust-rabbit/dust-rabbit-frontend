"use client";

import SmallX from "@/assets/small.x.svg";
import styles from "./styles.module.scss";

export function XButton({ inputValue, onClear }: { inputValue: string; onClear: () => void }) {
  if (!inputValue) return null;

  return <SmallX className={styles.icon} onClick={onClear} />;
}
