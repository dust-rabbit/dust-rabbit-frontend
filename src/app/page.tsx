"use client";

import { OnboardingNavbar } from "@/components/shared";
import { useProgress } from "@/hooks";

export default function Home() {
  const { progress, incrementProgress } = useProgress({ maxProgress: 4 });

  return <OnboardingNavbar progress={progress} incrementProgress={incrementProgress} />;
}
