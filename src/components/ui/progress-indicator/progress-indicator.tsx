import styles from "./styles.module.scss";

interface Props {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: Readonly<Props>) {
  return (
    <div>
      {current}
      <span className={styles.total}>/{total}</span>
    </div>
  );
}
