export type ThemeName =
  | "cool"
  | "warm"
  | "ink"
  | "mocha"
  | "peach"
  | "straw";

export const THEMES: readonly { value: ThemeName; label: string }[] = [
  { value: "cool", label: "Cool" },
  { value: "warm", label: "Warm" },
  { value: "ink", label: "Ink" },
  { value: "mocha", label: "Mocha Mousse (Pantone 2025)" },
  { value: "peach", label: "Peach Fuzz (Pantone 2024)" },
  { value: "straw", label: "Straw Paper" },
] as const;
