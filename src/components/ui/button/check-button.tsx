import ActiveCheckbox from "@/assets/checkbox-active.svg";
import Checkbox from "@/assets/checkbox.svg";
import styles from "./styles.module.scss";

interface Props {
  isChecked: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function CheckButton({ isChecked, className, children, onClick }: Readonly<Props>) {
  return (
    <button type="button" className={`${styles["toggle-button"]} ${className}`} onClick={onClick}>
      {isChecked ? <ActiveCheckbox /> : <Checkbox />}
      {children}
    </button>
  );
}
