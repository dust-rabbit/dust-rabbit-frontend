"use client";

import { Form, OnboardingNavbar } from "@/components/shared";
import { Button } from "@/components/ui";
import { useProgress } from "@/hooks";

export default function Home() {
  const { progress, incrementProgress } = useProgress({ maxProgress: 4 });

  return (
    <>
      <OnboardingNavbar progress={progress} incrementProgress={incrementProgress} maxProgress={4} />
      <div className="row">
        <Button>여자</Button>
        <Button>남자</Button>
      </div>
      <Button>다음</Button>
      <Form />
    </>
  );
}
