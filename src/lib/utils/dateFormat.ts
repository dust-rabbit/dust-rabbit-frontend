const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const getMaxDaysInMonth = (year: number, month: number): number => {
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
  return daysInMonth[month];
};

export const formatBirthDate = (input: string) => {
  const numbers = input.replace(/[^\d]/g, "");
  const { length } = numbers;

  if (length <= 4) return numbers;

  const year = Number(numbers.slice(0, 4));

  if (length <= 6) {
    const month = Number(numbers.slice(4));
    if (month > 12) return `${numbers.slice(0, 4)}.12`;
    return `${numbers.slice(0, 4)}.${numbers.slice(4)}`;
  }

  const month = Number(numbers.slice(4, 6));
  const day = Number(numbers.slice(6, 8));

  if (month > 12) {
    return `${numbers.slice(0, 4)}.12.${numbers.slice(6, 8)}`;
  }

  const maxDays = getMaxDaysInMonth(year, month);
  if (day > maxDays) {
    return `${numbers.slice(0, 4)}.${numbers.slice(4, 6)}.${maxDays.toString().padStart(2, "0")}`;
  }

  return `${numbers.slice(0, 4)}.${numbers.slice(4, 6)}.${numbers.slice(6, 8)}`;
};

export const formatBirthTime = (input: string) => {
  const numbers = input.replace(/[^\d]/g, "");
  const { length } = numbers;

  if (length <= 2) {
    if (Number(numbers) > 23) return "23";
    return numbers;
  }
  if (Number(numbers.slice(2)) > 59) return `${numbers.slice(0, 2)}:59`;
  return `${numbers.slice(0, 2)}:${numbers.slice(2, 4)}`;
};
