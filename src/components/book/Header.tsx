"use client";

import { JahanLogo } from "@/components/svg/JahanLogo";

type Props = {
  side: "left" | "right";
  chapter?: number;
  label?: string;
  showHamburger?: boolean;
  showLogo?: boolean;
  onHamburger?: () => void;
  onLogo?: () => void;
};

export function Header({
  side,
  chapter,
  label,
  showHamburger = false,
  showLogo = false,
  onHamburger,
  onLogo,
}: Props) {
  const hasTitle = chapter != null && label != null;
  return (
    <header
      className={
        `book-header book-header--${side}` + (hasTitle ? "" : " book-header--bare")
      }
    >
      <div className="book-header__row">
        <div className="book-header__slot book-header__slot--start">
          {showHamburger ? (
            <button
              type="button"
              className="book-header__hamburger"
              aria-label="Open menu"
              onClick={onHamburger}
            >
              <span />
              <span />
              <span />
            </button>
          ) : null}
        </div>

        <div className="book-header__title">
          {hasTitle ? `Chapter ${chapter} - ${label}` : ""}
        </div>

        <div className="book-header__slot book-header__slot--end">
          {showLogo ? (
            <button
              type="button"
              className="book-header__logo"
              aria-label="Go to cover"
              onClick={onLogo}
            >
              <JahanLogo />
            </button>
          ) : null}
        </div>
      </div>

      {hasTitle && <div className="book-header__line" aria-hidden="true" />}
    </header>
  );
}
