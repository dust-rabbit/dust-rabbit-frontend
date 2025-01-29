"use client";

import { OnboardingNavbar, Form } from "@/components/shared";
import { useProgress } from "@/hooks";
import { Button, PageBackButton } from "@/components/ui";

export default function Home() {
  const { progress, incrementProgress } = useProgress({ maxProgress: 4 });

  return (
    <>
      <OnboardingNavbar progress={progress} incrementProgress={incrementProgress} />
      <div className="row">
        <Button>여자</Button>
        <Button>남자</Button>
      </div>
      <PageBackButton />
      <Button>다음</Button>
      <Form />
    </>
  );
}
