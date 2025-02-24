import { FormInput } from "@/components/ui";
import { useFormContext } from "@/hooks";
import { ValidationSchema } from "@/lib/const";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type Props = {
  onSubmit: (value: string) => void;
  value: string;
  onNext: () => void;
};

type FormValues = {
  name: string;
};

export function TypeNameStep({ onSubmit, value, onNext }: Readonly<Props>) {
  const { currentStepFormRef, setIsFormValid } = useFormContext();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      name: value,
    },
    resolver: zodResolver(ValidationSchema.typeName),
    mode: "onChange",
  });

  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid, setIsFormValid]);

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(data.name);
    onNext();
  });

  return (
    <form ref={currentStepFormRef} onSubmit={onFormSubmit} className={styles.container}>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value: fieldValue, ref, name } }) => (
          <FormInput
            placeholder="이름"
            onChange={onChange}
            onBlur={onBlur}
            value={fieldValue}
            ref={ref}
            name={name}
            error={!!errors.name?.message}
            errorMessage={errors.name?.message}
          />
        )}
      />
    </form>
  );
}
