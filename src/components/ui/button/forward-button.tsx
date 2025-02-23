import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export function ForwardButton({ onClick, disabled }: Readonly<Props>) {
  return (
    <button type="button" className={styles.forward} onClick={onClick} disabled={disabled}>
      <h4 className={styles["no-margin"]}>다음</h4>
    </button>
  );
}
