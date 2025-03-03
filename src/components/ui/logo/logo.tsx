import munto from "@/assets/mt.png";
import Image from "next/image";
import styles from "./styles.module.scss";

export function Logo() {
  return (
    <div className={styles["logo-container"]}>
      <Image src={munto} alt="munto" width={120} />
      <h4 className={styles["sub-heading"]}>점 봐주는 토끼</h4>
      <h1 className={styles.heading}>점토</h1>
    </div>
  );
}
