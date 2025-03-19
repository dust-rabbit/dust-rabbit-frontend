"use client";

import { useCallback, useState } from "react";

type UseFormReturn<T extends Record<string, string | undefined>> = {
  form: T;
  handleChange: (key: keyof T, value: string | undefined) => void;
  setForm: React.Dispatch<React.SetStateAction<T>>;
};

export const useForm = <T extends Record<string, string | undefined>>(
  initialForm: T,
): UseFormReturn<T> => {
  const [form, setForm] = useState<T>(initialForm);

  const handleChange = useCallback(
    (key: keyof T, value: string | undefined) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    [setForm],
  );

  return {
    form,
    handleChange,
    setForm,
  };
};
