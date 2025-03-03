"use client";

import { SignUpForm } from "@/type";
import { Button, Bubble } from "@/components/ui";
import munto from "@/assets/mt-shadow.png";
import Image from "next/image";
import { PERSONALITY } from "@/lib/const";

type Props = {
  form: SignUpForm;
  onSubmit?: () => void;
};

export function ReviewInfoStep({ form }: Readonly<Props>) {
  const name = `${form.name}${form.gender === "남자" ? "군" : "양"}`;
  const birthDate = form.birthDate.split(".");
  const birthTime = form.birthTime?.split(":");
  const birth = `${birthDate[0]}년 ${Number(birthDate[1])}월 ${Number(birthDate[2])}일${birthTime ? ` ${birthTime[0]}시 ${birthTime[1]}분` : ""}`;
  const { mbti } = form;
  const personality = PERSONALITY[mbti as keyof typeof PERSONALITY];
  const speech = [
    `반가워요 ${name}!`,
    "저는 점 봐주는 토끼, 점토에요.",
    `${birth}에 태어나셨군요.`,
    `${mbti}라니`,
    `${personality}을 지니셨겠어요.`,
    `제가 ${name}을 제대로 이해했나요?`,
    "시작하기 버튼을 누르면 매일 운세를 봐드릴게요.",
  ];

  return (
    <div className="bottom-spaced-container">
      <Bubble speech={speech} withTail />
      <Image src={munto} alt="munto" />
      <Button>시작하기</Button>
    </div>
  );
}
