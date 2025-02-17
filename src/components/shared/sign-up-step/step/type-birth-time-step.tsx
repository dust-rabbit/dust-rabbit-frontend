"use client";

import { Button, FormInput } from "@/components/ui";
import { formatBirthTime } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type Props = {
  onSubmit: (value: string) => void;
  value: string | undefined;
  onNext: () => void;
};

type FormValues = {
  birthTime: string;
};

export function TypeBirthTimeStep({ onSubmit, value, onNext }: Readonly<Props>) {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      birthTime: value,
    },
  });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(data.birthTime);
    onNext();
  });

  return (
    <form onSubmit={onFormSubmit} className={styles.container}>
      <Controller
        name="birthTime"
        control={control}
        render={({ field: { onChange, onBlur, value: fieldValue, ref, name } }) => (
          <FormInput
            onChange={(e) => {
              const formatted = formatBirthTime(e.target.value);
              e.target.value = formatted.slice(0, 5); // 최대 5자리 (HH:MM)
              onChange(e);
            }}
            onBlur={onBlur}
            value={fieldValue}
            ref={ref}
            name={name}
            placeholder="00:00"
          />
        )}
      />
      <Button onClick={onFormSubmit} direction="bottom">
        다음
      </Button>
    </form>
  );
}
