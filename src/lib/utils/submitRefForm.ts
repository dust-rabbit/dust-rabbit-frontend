import React from "react";

export const submitRefForm = (formRef: React.RefObject<HTMLFormElement | null>) => {
  if (formRef?.current) {
    formRef.current.requestSubmit();
  } else {
    throw new Error("Form element not found");
  }
};
