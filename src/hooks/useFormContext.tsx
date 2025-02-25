import {
  createContext,
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

interface FormContextType {
  currentStepFormRef: RefObject<HTMLFormElement | null>;
  isFormValid: boolean;
  setIsFormValid: Dispatch<SetStateAction<boolean>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

function FormProvider({ children }: Readonly<PropsWithChildren>) {
  const currentStepFormRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const value = useMemo(
    () => ({ currentStepFormRef, isFormValid, setIsFormValid }),
    [currentStepFormRef, isFormValid, setIsFormValid],
  );
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}

export { FormProvider, useFormContext };
