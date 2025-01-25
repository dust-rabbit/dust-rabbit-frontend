"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export function PageBackButton() {
  const router = useRouter();
  return (
    <button type="button" className={styles["go-back"]} onClick={() => router.back()}>
      <Image src="chevron.left.svg" alt="chevron" width={22} height={22} />
    </button>
  );
}
