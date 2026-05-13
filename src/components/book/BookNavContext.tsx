"use client";

import { createContext, useContext } from "react";

export type BookNav = {
  goToSpread: (spreadIdx: number) => void;
  currentSpread: number;
};

const BookNavContext = createContext<BookNav | null>(null);

export const BookNavProvider = BookNavContext.Provider;

export function useBookNav(): BookNav {
  const ctx = useContext(BookNavContext);
  if (!ctx) throw new Error("useBookNav must be used inside BookNavProvider");
  return ctx;
}
