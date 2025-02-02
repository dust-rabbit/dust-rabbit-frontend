import styles from "./styles.module.scss";

type Props = {
  children: string;
  onClick?: () => void;
};

export function Button({ children, onClick }: Readonly<Props>) {
  return (
    <button type="button" className={styles.default} onClick={onClick}>
      <h5>{children}</h5>
    </button>
  );
}
