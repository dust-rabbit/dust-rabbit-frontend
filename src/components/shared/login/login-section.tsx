"use client";

import { SocialLoginButton, Divider } from "@/components/ui";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export function LoginSection() {
  const router = useRouter();
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const loginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  return (
    <div className={styles["social-container"]}>
      <div className={styles["social-divider"]}>
        <Divider />
        <p className={styles["social-text"]}>소셜 로그인</p>
        <Divider />
      </div>
      <SocialLoginButton onClick={() => router.replace(loginUrl)} />
    </div>
  );
}
