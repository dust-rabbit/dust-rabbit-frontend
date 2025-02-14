import styles from "./styles.module.scss";

type ButtonVariants = "primary" | "disabled";

type Props = {
  children: string;
  onClick?: () => void;
  variant?: ButtonVariants;
};

export function Button({ children, onClick, variant = "primary" }: Readonly<Props>) {
  if (variant === "primary") {
    return (
      <button type="button" className={styles.primary} onClick={onClick}>
        <h5>{children}</h5>
      </button>
    );
  }
  return (
    <button type="button" className={styles.disabled}>
      <h5>{children}</h5>
    </button>
  );
}
