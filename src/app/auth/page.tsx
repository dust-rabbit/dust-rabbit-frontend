"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { loginApi } from "@/api";

// import styles from "./styles.module.scss";

export default function LoginSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

  useEffect(() => {
    async function fetchData() {
      const code = searchParams.get("code");
      if (code && REST_API_KEY && REDIRECT_URI) {
        try {
          const idToken = await loginApi.getLoginToken({ code });
          const isNew = await loginApi.login({ socialType: "KAKAO", idToken });
          if (isNew) router.replace("/onboarding");
        } catch (error) {
          console.error(error);
        }
        router.replace("/");
      }
    }
    fetchData();
  }, [searchParams, REST_API_KEY, REDIRECT_URI]);

  return <div />;
}
