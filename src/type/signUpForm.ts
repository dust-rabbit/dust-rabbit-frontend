export type Gender = "남자" | "여자";
export type CalendarType = "양력" | "음력";
export type SignUpForm = {
  gender: Gender | undefined;
  name: string;
  birthDate: string;
  calendarType: CalendarType;
  birthTime: string | undefined;
  mbti: string;
};
