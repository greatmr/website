export type ThemeName = "cool" | "warm" | "ink";

export const THEMES: readonly { value: ThemeName; label: string }[] = [
  { value: "cool", label: "Cool" },
  { value: "warm", label: "Warm" },
  { value: "ink", label: "Ink" },
] as const;
