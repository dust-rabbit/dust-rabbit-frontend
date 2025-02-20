import { z } from "zod";

export const ValidationSchema = {
  typeName: z.object({
    name: z
      .string()
      .min(2, "2~6글자, 한글만 입력 가능해요")
      .max(6, "2~6글자, 한글만 입력 가능해요")
      .regex(/^[가-힣]+$/, "한글만 입력 가능해요"),
  }),
  typeBirthDate: z.object({
    birthDate: z.string().refine((date) => {
      const [year, month, day] = date.split(".").map(Number);
      const inputDate = new Date(year, month - 1, day);
      const currentYear = new Date().getFullYear();

      const isValidDate =
        inputDate.getFullYear() === year &&
        inputDate.getMonth() === month - 1 &&
        inputDate.getDate() === day;

      const isValidYear = year >= 1900 && year <= currentYear;

      return isValidDate && isValidYear;
    }, "올바른 생년월일을 입력해주세요."),
    calendarType: z.enum(["양력", "음력"]),
  }),
  birthTimeStep: z.object({
    birthTime: z.union([
      z.undefined(),
      z
        .string()
        .min(5, "시간을 입력해주세요")
        .refine((time) => {
          const [hours, minutes] = time.split(":").map(Number);
          return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
        }, "올바른 시간을 입력해주세요."),
    ]),
  }),
};
