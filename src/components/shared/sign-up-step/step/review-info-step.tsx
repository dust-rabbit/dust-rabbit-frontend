"use client";

import { SignUpForm } from "@/type";
import { Button, Bubble } from "@/components/ui";
import munto from "@/assets/mt-question.png";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  form: SignUpForm;
  onSubmit?: () => void;
};

const PERSONALITY = {
  ISTJ: "체계적인 성향",
  ISFJ: "헌신적인 성향",
  INFJ: "이상주의적인 성향",
  INTJ: "분석적인 성향",
  ISTP: "냉철한 성향",
  ISFP: "온화한 성향",
  INFP: "공감적인 성향",
  INTP: "논리적인 성향",
  ESTP: "직설적인 성향",
  ESFP: "활발한 성향",
  ENFP: "열정적인 성향",
  ENTP: "도전적인 성향",
  ESTJ: "단호한 성향",
  ESFJ: "화합적인 성향",
  ENFJ: "사람 중심적인 성향",
  ENTJ: "주도적인 성향",
};

// TODO: MBTI 타입이랑 타입체커 구현

export function ReviewInfoStep({ form }: Readonly<Props>) {
  const name = `${form.name}${form.gender === "남자" ? "군" : "양"}`;
  const birthDate = form.birthDate.split(".");
  const birth = `${birthDate[0]}년 ${Number(birthDate[1])}월 ${Number(birthDate[2])}일${form.birthTime ? ` ${form.birthTime}` : ""}`;
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
    <div className={styles.container}>
      <Bubble speech={speech} withTail />
      <Image src={munto} alt="munto" />
      <Button direction="bottom">시작하기</Button>
    </div>
  );
}
