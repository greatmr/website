"use client";

import { JahanLogo } from "@/components/svg/JahanLogo";
import { useBookNav } from "./BookNavContext";

type Item = {
  n: string;
  title: string;
  sub: string;
};

const ITEMS: Item[] = [
  { n: "1", title: "Portfolio", sub: "Cover · logo marks" },
  { n: "2", title: "Home", sub: "About me & summary" },
  { n: "3", title: "Projects", sub: "Projects, Skills & Experiences" },
  { n: "4", title: "Contact", sub: "Social media" },
];

type Props = {
  open: boolean;
  current: number;
  onClose: () => void;
  onNavigate: (tabIndex: number) => void;
};

export function Drawer({ open, current, onClose, onNavigate }: Props) {
  const { goToSpread } = useBookNav();
  return (
    <>
      <div
        className={"drawer-mask" + (open ? " open" : "")}
        onClick={onClose}
      />
      <aside className={"drawer" + (open ? " open" : "")}>
        <button
          className="drawer__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <button
          type="button"
          className="drawer__logo"
          onClick={() => {
            goToSpread(0);
            onClose();
          }}
          aria-label="Go to cover"
        >
          <JahanLogo />
        </button>
        <nav>
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className={"menu-item" + (current === i ? " is-current" : "")}
              onClick={() => {
                onNavigate(i);
                onClose();
              }}
            >
              <span className="menu-item__num">{it.n}</span>
              <div>
                <div className="menu-item__title">{it.title}</div>
                <div className="menu-item__sub">{it.sub}</div>
              </div>
            </div>
          ))}
        </nav>
        <div
          style={{
            marginTop: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-mute)",
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          mreza.dev · ed. I
        </div>
      </aside>
    </>
  );
}
