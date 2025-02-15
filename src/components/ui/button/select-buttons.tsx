import UnChecked from "@/assets/checkbox.svg";
import Checked from "@/assets/checkbox-active.svg";
import styles from "./styles.module.scss";

type SelectButtonProps = {
  select: string;
  selected: string | undefined;
  onSelectClick: () => void;
  onDuplicateClick: () => void;
};

function SelectButton({ select, selected, onSelectClick, onDuplicateClick }: SelectButtonProps) {
  return (
    <button
      type="button"
      className={select === selected ? styles.selected : styles.select}
      onClick={() => {
        if (select === selected) onDuplicateClick();
        else onSelectClick();
      }}
    >
      <p>{select}</p>
      {select === selected && <Checked />}
      {select !== selected && <UnChecked />}
    </button>
  );
}

type Props = {
  select1: string;
  select2: string;
  selected: string | undefined;
  onSelect1Click: () => void;
  onSelect2Click: () => void;
  onDuplicateClick: () => void;
};

export function SelectButtons({
  select1,
  select2,
  selected,
  onSelect1Click,
  onSelect2Click,
  onDuplicateClick,
}: Props) {
  return (
    <div className={styles["select-container"]}>
      <SelectButton
        select={select1}
        selected={selected}
        onSelectClick={onSelect1Click}
        onDuplicateClick={onDuplicateClick}
      />
      <SelectButton
        select={select2}
        selected={selected}
        onSelectClick={onSelect2Click}
        onDuplicateClick={onDuplicateClick}
      />
    </div>
  );
}
