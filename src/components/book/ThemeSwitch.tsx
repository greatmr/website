"use client";

import { THEMES, type ThemeName } from "@/lib/themes";

type Props = {
  value: ThemeName;
  onChange: (theme: ThemeName) => void;
};

export function ThemeSwitch({ value, onChange }: Props) {
  return (
    <div className="theme-switch" role="radiogroup" aria-label="Theme">
      {THEMES.map((t) => (
        <button
          key={t.value}
          type="button"
          role="radio"
          aria-checked={value === t.value}
          aria-label={`Theme: ${t.label}`}
          title={t.label}
          data-theme={t.value}
          data-on={value === t.value}
          onClick={() => onChange(t.value)}
        />
      ))}
    </div>
  );
}
