export const formatBirthDate = (input: string) => {
  const numbers = input.replace(/[^\d]/g, "");
  const { length } = numbers;

  if (length <= 4) return numbers;
  if (length <= 6) return `${numbers.slice(0, 4)}.${numbers.slice(4)}`;
  return `${numbers.slice(0, 4)}.${numbers.slice(4, 6)}.${numbers.slice(6, 8)}`;
};

export const formatBirthTime = (input: string) => {
  const numbers = input.replace(/[^\d]/g, "");
  const { length } = numbers;

  if (length <= 2) return numbers;
  return `${numbers.slice(0, 2)}:${numbers.slice(2, 4)}`;
};
