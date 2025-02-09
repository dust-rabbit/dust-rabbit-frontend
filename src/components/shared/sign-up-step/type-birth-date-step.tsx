"use client";

import { useState } from "react";

export function TypeBirthDateStep() {
  const [year] = useState(2000);
  const [month] = useState(1);
  const [day] = useState(1);
  return (
    <div>
      {year}년 {month}월 {day}일
    </div>
  );
}
