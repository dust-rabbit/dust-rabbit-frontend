export const submitIdForm = (formId: string) => {
  const formElement = document.getElementById(formId) as HTMLFormElement;
  if (formElement) {
    formElement.requestSubmit();
  } else {
    throw new Error("Form element not found");
  }
};
