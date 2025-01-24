import { useState } from "react";

interface UseProgressProps {
  maxProgress: number;
  initialProgress?: number;
}

export const useProgress = ({ maxProgress, initialProgress = 0 }: UseProgressProps) => {
  const [progress, setProgress] = useState(Math.min(initialProgress, maxProgress));

  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 1, maxProgress));
  };

  const setProgressValue = (value: number) => {
    setProgress(Math.min(value, maxProgress));
  };

  return {
    progress,
    incrementProgress,
    setProgressValue,
  };
};
