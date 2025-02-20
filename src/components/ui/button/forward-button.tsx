import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
};

export function ForwardButton({ onClick }: Readonly<Props>) {
  return (
    <button type="button" className={styles.forward} onClick={onClick}>
      <h4 className={styles["no-margin"]}>다음</h4>
    </button>
  );
}
