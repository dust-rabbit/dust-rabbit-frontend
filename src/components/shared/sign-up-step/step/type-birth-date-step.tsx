"use client";

import { Button, FormInput } from "@/components/ui";
import { formatBirthDate } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type Props = {
  onSubmit: (value: string) => void;
  value: string;
  onNext: () => void;
};

type FormValues = {
  birthDate: string;
};

export function TypeBirthDateStep({ onSubmit, value, onNext }: Readonly<Props>) {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      birthDate: value,
    },
  });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(data.birthDate);
    onNext();
  });

  return (
    <form onSubmit={onFormSubmit} className={styles.container}>
      <Controller
        name="birthDate"
        control={control}
        render={({ field: { onChange, onBlur, value: fieldValue, ref, name } }) => (
          <FormInput
            onChange={(e) => {
              const formatted = formatBirthDate(e.target.value);
              e.target.value = formatted.slice(0, 10); // 최대 10자리 (YYYY.MM.DD)
              onChange(e);
            }}
            onBlur={onBlur}
            value={fieldValue}
            ref={ref}
            name={name}
            placeholder="1998.01.01"
          />
        )}
      />
      <Button onClick={onFormSubmit} direction="bottom">
        다음
      </Button>
    </form>
  );
}
