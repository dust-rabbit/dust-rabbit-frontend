import styles from "./styles.module.scss";

type ButtonVariants = "primary" | "disabled";
type Props = {
  children: string;
  onClick?: () => void;
  variant?: ButtonVariants;
  style?: React.CSSProperties;
};

export function Button({ children, onClick, variant = "primary", style }: Readonly<Props>) {
  const getClassName = () => {
    const baseClass = variant === "primary" ? "primary" : "disabled";
    return styles[baseClass];
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
