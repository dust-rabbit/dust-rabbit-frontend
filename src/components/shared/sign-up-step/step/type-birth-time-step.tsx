"use client";

import { CheckButton, FormInput } from "@/components/ui";
import { useFormContext } from "@/hooks";
import { ValidationSchema } from "@/lib/const";
import { formatBirthTime } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
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
  const { currentStepFormRef, setIsFormValid } = useFormContext();
  const [isUnknownTime, setIsUnknownTime] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      birthTime: value,
    },
    resolver: zodResolver(
      isUnknownTime ? ValidationSchema.unknownBirthTimeStep : ValidationSchema.birthTimeStep,
    ),
    mode: "onChange",
  });

  const onFormSubmit = handleSubmit((data) => {
    if (!isUnknownTime && !data.birthTime) return;

    onSubmit(isUnknownTime ? undefined : data.birthTime);
    onNext();
  });

  useEffect(() => {
    setIsFormValid(isUnknownTime ? true : isValid);
  }, [isUnknownTime, isValid, setIsFormValid]);

  return (
    <form ref={currentStepFormRef} onSubmit={onFormSubmit} className={styles.container}>
      <div className={styles["input-container"]}>
        <Controller
          name="birthTime"
          control={control}
          render={({ field: { onChange, onBlur, value: fieldValue, ref, name } }) => (
            <FormInput
              onChange={(e) => {
                const formatted = formatBirthTime(e.target.value);
                onChange(formatted);
              }}
              onBlur={onBlur}
              value={fieldValue}
              ref={ref}
              name={name}
              placeholder="12:00"
              error={!!errors.birthTime?.message}
              disabled={isUnknownTime}
            />
          )}
        />
        <CheckButton
          isChecked={isUnknownTime}
          onClick={() => {
            setIsUnknownTime((prev) => !prev);
            setValue("birthTime", "");
          }}
        >
          태어난 시간 모름
        </CheckButton>
      </div>
    </form>
  );
}
