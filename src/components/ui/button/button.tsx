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
  const getClassName = () => {
    const baseClass = variant === "primary" ? "primary" : "disabled";
    return direction === "bottom" ? styles[`${baseClass}-bottom`] : styles[baseClass];
  };

  return (
    <button
      type="button"
      className={getClassName()}
      style={style}
      onClick={variant === "primary" ? onClick : undefined}
      disabled={variant === "disabled"}
    >
      <h5>{children}</h5>
    </button>
  );
}
