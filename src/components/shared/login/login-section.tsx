import { SocialLoginButton, Divider } from "@/components/ui";
import styles from "./styles.module.scss";

export function LoginSection() {
  return (
    <div className={styles["social-container"]}>
      <div className={styles["social-divider"]}>
        <Divider />
        <p className={styles["social-text"]}>소셜 로그인</p>
        <Divider />
      </div>
      <SocialLoginButton onClick={() => {}} />
    </div>
  );
}
