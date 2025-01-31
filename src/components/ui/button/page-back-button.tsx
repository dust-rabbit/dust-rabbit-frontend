"use client";

import { useRouter } from "next/navigation";
import ChevronLeft from "@/assets/chevron.left.svg";
import styles from "./styles.module.scss";

export function PageBackButton() {
  const router = useRouter();
  return (
    <button type="button" className={styles["go-back"]} onClick={() => router.back()}>
      <ChevronLeft />
    </button>
  );
}
