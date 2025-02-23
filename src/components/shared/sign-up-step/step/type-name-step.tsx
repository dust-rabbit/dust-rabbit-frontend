import { Button, FormInput } from "@/components/ui";
import { ValidationSchema } from "@/lib/const";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: value,
    },
    resolver: zodResolver(ValidationSchema.typeName),
    mode: "onChange",
  });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(data.name);
    onNext();
  });

  return (
    <form id="이름 입력" onSubmit={onFormSubmit} className={styles.container}>
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
      <Button onClick={onFormSubmit} direction="bottom">
        다음
      </Button>
    </form>
  );
}
