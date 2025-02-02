import { useState } from "react";

type UseFormReturn<T extends Record<string, any>> = {
  form: T;
  handleChange: (key: keyof T, value: any) => void;
  setForm: React.Dispatch<React.SetStateAction<T>>;
};

export const useForm = <T extends Record<string, any>>(initialForm: T): UseFormReturn<T> => {
  const [form, setForm] = useState<T>(initialForm);

  const handleChange = (key: keyof T, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return {
    form,
    handleChange,
    setForm,
  };
};
