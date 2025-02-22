"use client";

import { CheckButton, FormInput } from "@/components/ui";
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
    mode: "onChange",
  });

  const onFormSubmit = handleSubmit((data) => {
    if (!isUnknownTime && !data.birthTime) return;

    onSubmit(isUnknownTime ? undefined : data.birthTime);
    onNext();
  });

  return (
    <form id="출생시간 입력" onSubmit={onFormSubmit} className={styles.container}>
      <div className={styles["input-container"]}>
        <Controller
          name="birthTime"
          control={control}
          render={({ field: { onChange, onBlur, value: fieldValue, ref, name } }) => (
            <>
              <FormInput
                onChange={(e) => {
                  const formatted = formatBirthTime(e.target.value);
                  onChange(formatted);
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
                <CheckButton
                  isChecked={isUnknownTime}
                  className={styles["toggle-button"]}
                  onClick={() => {
                    setIsUnknownTime(!isUnknownTime);
                    if (!isUnknownTime) {
                      setValue("birthTime", undefined);
                    }
                  }}
                >
                  태어난 시간 모름
                </CheckButton>
              </div>
            </>
          )}
        />
      </div>
    </form>
  );
}
