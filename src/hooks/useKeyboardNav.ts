"use client";

import { useEffect } from "react";

type Options = {
  onPrev: () => void;
  onNext: () => void;
  enabled?: boolean;
};

export function useKeyboardNav({ onPrev, onNext, enabled = true }: Options) {
  useEffect(() => {
    if (!enabled) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onPrev, onNext, enabled]);
}
