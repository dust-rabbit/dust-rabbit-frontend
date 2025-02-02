import ChevronLeft from "@/assets/chevron.left.svg";
import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
};

export function PageBackButton({ onClick }: Readonly<Props>) {
  return (
    <button type="button" className={styles["go-back"]} onClick={onClick}>
      <ChevronLeft />
    </button>
  );
}
