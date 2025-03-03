import Kakao from "@/assets/kakao.svg";
import styles from "./styles.module.scss";

type SocialVariants = "Kakao";
type Props = {
  onClick: () => void;
  variant?: SocialVariants;
};

export function SocialLoginButton({ onClick, variant = "Kakao" }: Readonly<Props>) {
  // NOTE: 추후 다른 소셜 로그인 variant 추가
  return (
    <button type="button" className={styles["login-kakao"]} onClick={onClick}>
      <Kakao />
      <h5>{variant}로 계속하기</h5>
    </button>
  );
}
