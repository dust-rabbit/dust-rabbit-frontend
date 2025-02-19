import ChevronLeft from "@/assets/chevron.left.svg";
import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
};

export function BackButton({ onClick }: Readonly<Props>) {
  return (
    <button type="button" className={styles.back} onClick={onClick}>
      <ChevronLeft />
    </button>
  );
}
