import Checked from "@/assets/checkbox-active.svg";
import UnChecked from "@/assets/checkbox.svg";
import styles from "./styles.module.scss";

type SelectButtonProps = {
  label: string;
  value: string;
  selected: string | undefined;
  onSelectClick: () => void;
  onDuplicateClick: () => void;
};

function SelectButton({
  label,
  value,
  selected,
  onSelectClick,
  onDuplicateClick,
}: Readonly<SelectButtonProps>) {
  return (
    <button
      type="button"
      className={value === selected ? styles.selected : styles.select}
      onClick={() => {
        if (value === selected) onDuplicateClick();
        else onSelectClick();
      }}
    >
      <p>{label}</p>
      {value === selected && <Checked />}
      {value !== selected && <UnChecked />}
    </button>
  );
}

type Props = {
  select1Value: string;
  select2Value: string;
  select1Label?: string;
  select2Label?: string;
  selected: string | undefined;
  onSelect1Click: () => void;
  onSelect2Click: () => void;
  onDuplicateClick: () => void;
};

export function SelectButtons({
  select1Value,
  select2Value,
  select1Label,
  select2Label,
  selected,
  onSelect1Click,
  onSelect2Click,
  onDuplicateClick,
}: Readonly<Props>) {
  return (
    <div className={styles["select-container"]}>
      <SelectButton
        label={select1Label ?? select1Value}
        value={select1Value}
        selected={selected}
        onSelectClick={onSelect1Click}
        onDuplicateClick={onDuplicateClick}
      />
      <SelectButton
        label={select2Label ?? select2Value}
        value={select2Value}
        selected={selected}
        onSelectClick={onSelect2Click}
        onDuplicateClick={onDuplicateClick}
      />
    </div>
  );
}
