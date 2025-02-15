import styles from "./styles.module.scss";

type ButtonVariants = "primary" | "disabled";
type Direction = "default" | "bottom";
type Props = {
  children: string;
  onClick?: () => void;
  variant?: ButtonVariants;
  direction?: Direction;
  style?: React.CSSProperties;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  direction = "default",
  style,
}: Readonly<Props>) {
  if (variant === "primary") {
    return (
      <button
        type="button"
        className={direction === "bottom" ? styles["primary-bottom"] : styles.primary}
        style={style}
        onClick={onClick}
      >
        <h5>{children}</h5>
      </button>
    );
  }
  return (
    <button
      type="button"
      className={direction === "bottom" ? styles["disabled-bottom"] : styles.disabled}
      style={style}
    >
      <h5>{children}</h5>
    </button>
  );
}
