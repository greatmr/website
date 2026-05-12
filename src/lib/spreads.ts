export type SpreadId = "portfolio" | "home" | "about" | "more" | "contact";

export type SpreadMeta = {
  id: SpreadId;
  label: string;
  /** When true, the spread renders without chapter eyebrows (cover/landing). */
  flat?: boolean;
  /** Eyebrow label for the left page; falls back to `label` if absent. */
  leftLabel?: string;
  /** Eyebrow label for the right page; falls back to `label` if absent. */
  rightLabel?: string;
};

export const SPREADS: readonly SpreadMeta[] = [
  { id: "portfolio", label: "Portfolio", flat: true },
  {
    id: "home",
    label: "Home",
    leftLabel: "Portfolio",
    rightLabel: "Projects",
  },
  {
    id: "about",
    label: "About",
    leftLabel: "About",
    rightLabel: "Experience",
  },
  {
    id: "more",
    label: "More about",
    leftLabel: "Bio",
    rightLabel: "Highlights",
  },
  {
    id: "contact",
    label: "Contact",
    leftLabel: "Contact",
    rightLabel: "Letter",
  },
] as const;

export const TAB_TO_SPREAD = [0, 1, 2, 4] as const;

export function spreadToTab(i: number): number {
  if (i === 0) return 0;
  if (i === 1) return 1;
  if (i === 2 || i === 3) return 2;
  if (i === 4) return 3;
  return 0;
}

/**
 * Chapter number for the left page of a spread, counting only non-flat spreads.
 * Each non-flat spread contributes two chapters (left, right).
 */
export function leftChapterFor(spreadIdx: number): number {
  const nonFlatBefore = SPREADS.slice(0, spreadIdx).filter(
    (s) => !s.flat,
  ).length;
  return nonFlatBefore * 2 + 1;
}

export function rightChapterFor(spreadIdx: number): number {
  return leftChapterFor(spreadIdx) + 1;
}
