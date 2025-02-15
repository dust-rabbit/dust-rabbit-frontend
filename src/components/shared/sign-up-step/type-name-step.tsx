import { Button, FormInput } from "@/components/ui";
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
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: value,
    },
  });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(data.name);
    onNext();
  });

  return (
    <form onSubmit={onFormSubmit} className={styles.container}>
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
          />
        )}
      />
      <Button onClick={onFormSubmit} direction="bottom">
        다음
      </Button>
    </form>
  );
}
