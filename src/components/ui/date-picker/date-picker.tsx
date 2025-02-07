"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface Props {
  onValueChange?: (value: number) => void;
  selectedValue?: number;
  values: number[];
  suffix?: string;
  containerWidth?: number;
  containerHeight?: number;
  itemHeight?: number;
}

const DEFAULT_ITEM_HEIGHT = 50;
const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 150;

export function DatePicker({
  onValueChange,
  values,
  selectedValue,
  suffix = "",
  containerWidth = DEFAULT_WIDTH,
  containerHeight = DEFAULT_HEIGHT,
  itemHeight = DEFAULT_ITEM_HEIGHT,
}: Readonly<Props>) {
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedValue && pickerRef.current) {
      const index = values.indexOf(selectedValue);
      if (index !== -1) {
        pickerRef.current.scrollTop = index * itemHeight;
      }
    }
  }, [selectedValue, values, itemHeight]);

  const handleScroll = () => {
    if (!pickerRef.current) return;

    const { scrollTop } = pickerRef.current;
    const selectedIndex = Math.round(scrollTop / itemHeight);
    const newSelectedValue = values[selectedIndex];

    if (newSelectedValue !== undefined) {
      onValueChange?.(newSelectedValue);
    }
  };

  return (
    <div
      className={styles["date-picker"]}
      style={
        {
          "--item-height": `${itemHeight}px`,
          "--picker-width": `${containerWidth}px`,
          "--picker-height": `${containerHeight}px`,
        } as React.CSSProperties
      }
    >
      <div className={styles["picker-container"]}>
        <div className={styles["selection-indicator"]} />
        <div ref={pickerRef} className={styles.picker} onScroll={handleScroll}>
          <div className={styles["picker-padding"]} />
          {values.map((value) => (
            <div
              key={value}
              className={`${styles["picker-item"]} ${
                value === selectedValue ? styles.selected : ""
              }`}
            >
              {value}
              {suffix}
            </div>
          ))}
          <div className={styles["picker-padding"]} />
        </div>
      </div>
    </div>
  );
}
