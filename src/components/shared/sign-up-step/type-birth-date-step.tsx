"use client";

import { DatePicker } from "@/components/ui";
import { useState } from "react";

export function TypeBirthDateStep() {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const years = Array.from({ length: 100 }, (_, i) => 1950 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <>
      <div>
        {year}년 {month}월 {day}일
      </div>
      <div style={{ display: "flex", gap: "10px", width: "100%" }}>
        <DatePicker
          values={years}
          onValueChange={(value) => setYear(value)}
          selectedValue={year}
          suffix="년"
        />
        <DatePicker
          values={months}
          onValueChange={(value) => setMonth(value)}
          selectedValue={month}
          suffix="월"
        />
        <DatePicker
          values={days}
          onValueChange={(value) => setDay(value)}
          selectedValue={day}
          suffix="일"
        />
      </div>
    </>
  );
}
