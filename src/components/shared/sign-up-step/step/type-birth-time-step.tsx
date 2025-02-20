"use client";

import ActiveCheckbox from "@/assets/checkbox-active.svg";
import Checkbox from "@/assets/checkbox.svg";
import { Button, FormInput } from "@/components/ui";
import { ValidationSchema } from "@/lib/const";
import { formatBirthTime } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type Props = {
  onSubmit: (value: string | undefined) => void;
  value: string | undefined;
  onNext: () => void;
};

type FormValues = {
  birthTime?: string;
};

export function TypeBirthTimeStep({ onSubmit, value = undefined, onNext }: Readonly<Props>) {
  const [isUnknownTime, setIsUnknownTime] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      birthTime: value,
    },
    resolver: zodResolver(ValidationSchema.birthTimeStep),
  });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(isUnknownTime ? undefined : data.birthTime);
    onNext();
  });

  return (
    <form onSubmit={onFormSubmit} className={styles.container}>
      <div className={styles["input-container"]}>
        <Controller
          name="birthTime"
          control={control}
          render={({ field: { onChange, onBlur, value: fieldValue, ref, name } }) => (
            <>
              <FormInput
                onChange={(e) => {
                  const formatted = formatBirthTime(e.target.value);
                  e.target.value = formatted.slice(0, 5); // 최대 5자리 (HH:MM)
                  onChange(e);
                }}
                onBlur={onBlur}
                value={fieldValue ?? ""}
                ref={ref}
                name={name}
                placeholder="13:00"
                error={!!errors.birthTime?.message}
                disabled={isUnknownTime}
              />
              <div className={styles["calendar-toggle"]}>
                <button
                  type="button"
                  className={styles["toggle-button"]}
                  onClick={() => {
                    setIsUnknownTime(!isUnknownTime);
                    if (!isUnknownTime) {
                      setValue("birthTime", undefined);
                    }
                  }}
                >
                  {isUnknownTime ? <ActiveCheckbox /> : <Checkbox />}
                  태어난 시간 모름
                </button>
              </div>
            </>
          )}
        />
      </div>
      <Button onClick={onFormSubmit} direction="bottom">
        다음
      </Button>
    </form>
  );
}
