"use client";

import { Button, CheckButton, FormInput } from "@/components/ui";
import { ValidationSchema } from "@/lib/const";
import { formatBirthDate } from "@/lib/utils";
import { CalendarType } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type Props = {
  onSubmit: (value: { date: string; calendarType: CalendarType }) => void;
  value: { date: string; calendarType: CalendarType };
  onNext: () => void;
};

type FormValues = {
  birthDate: string;
  calendarType: CalendarType;
};

export function TypeBirthDateStep({ onSubmit, value, onNext }: Readonly<Props>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      birthDate: value.date,
      calendarType: value.calendarType,
    },
    resolver: zodResolver(ValidationSchema.typeBirthDate),
    mode: "onChange",
  });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit({ date: data.birthDate, calendarType: data.calendarType });
    onNext();
  });

  return (
    <form onSubmit={onFormSubmit} className={styles.container}>
      <div className={styles["input-container"]}>
        <Controller
          name="birthDate"
          control={control}
          render={({ field: { onChange, onBlur, value: fieldValue, ref, name } }) => (
            <FormInput
              onChange={(e) => {
                const formatted = formatBirthDate(e.target.value);
                onChange(formatted);
              }}
              onBlur={onBlur}
              value={fieldValue}
              ref={ref}
              name={name}
              placeholder="1998.01.01"
              error={!!errors.birthDate?.message}
            />
          )}
        />
        <div className={styles["calendar-toggle"]}>
          <Controller
            name="calendarType"
            control={control}
            render={({ field: { onChange, value: fieldValue } }) => (
              <>
                <CheckButton isChecked={fieldValue === "양력"} onClick={() => onChange("양력")}>
                  양력
                </CheckButton>
                <CheckButton
                  isChecked={fieldValue === "음력"}
                  onClick={() => onChange("음력")}
                  className={styles["toggle-button"]}
                >
                  음력
                </CheckButton>
              </>
            )}
          />
        </div>
      </div>
      <Button onClick={onFormSubmit} direction="bottom">
        다음
      </Button>
    </form>
  );
}
