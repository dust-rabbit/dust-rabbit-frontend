"use client";

import styles from "./styles.module.scss";

export function Button({ children }: { children: string }) {
  return (
    <button type="button" className={styles.default}>
      <h5>{children}</h5>
    </button>
  );
}
