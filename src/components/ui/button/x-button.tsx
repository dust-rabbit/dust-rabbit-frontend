"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

export default function XButton({
  inputValue,
  onClear,
}: {
  inputValue: string;
  onClear: () => void;
}) {
  if (!inputValue) return null;

  return (
    <button type="button" className={styles.icon} onClick={onClear}>
      <Image src="small.x.svg" width={18} height={18} alt="smallx" />
    </button>
  );
}
