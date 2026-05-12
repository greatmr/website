"use client";

import { useCallback, useState } from "react";

export function useCopyToClipboard(resetMs = 1200) {
  const [copiedKey, setCopiedKey] = useState<string>("");

  const copy = useCallback(
    async (key: string, value: string) => {
      try {
        await navigator.clipboard?.writeText(value);
        setCopiedKey(key);
        window.setTimeout(() => setCopiedKey(""), resetMs);
      } catch {
        // ignore — clipboard may be unavailable in non-secure contexts
      }
    },
    [resetMs],
  );

  return { copiedKey, copy };
}
