import type { ReactElement } from "react";

export type TileKind =
  | "grid"
  | "type"
  | "moon"
  | "triangle"
  | "neon"
  | "whale"
  | "mountain"
  | "diagram"
  | "geom"
  | "door"
  | "cave";

const tiles: Record<TileKind, ReactElement> = {
  grid: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#a8a59c" />
      <g stroke="#5e5b53" strokeWidth="1.4" fill="none">
        <rect x="22" y="22" width="22" height="22" />
        <rect x="56" y="22" width="22" height="22" />
        <rect x="22" y="56" width="22" height="22" />
        <rect x="56" y="56" width="22" height="22" />
      </g>
      <circle cx="44" cy="44" r="2.2" fill="#3a3833" />
      <circle cx="56" cy="56" r="2.2" fill="#3a3833" />
    </svg>
  ),
  type: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#0a0c14" />
      <g fill="#e9e7df" fontFamily="monospace" fontSize="14" textAnchor="middle">
        <text x="50" y="32">P</text>
        <text x="50" y="48">O R</text>
        <text x="50" y="64">T F</text>
        <text x="50" y="80">L I O</text>
      </g>
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#1a1d28" />
      <circle cx="70" cy="40" r="36" fill="#f2efe7" />
      <circle cx="40" cy="78" r="3" fill="#1a1d28" />
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="tile-tri" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2c3140" />
          <stop offset="1" stopColor="#0a0c14" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#tile-tri)" />
      <polygon
        points="50,20 78,72 22,72"
        fill="none"
        stroke="#f2efe7"
        strokeWidth="1.5"
      />
    </svg>
  ),
  neon: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#080a12" />
      <rect
        x="32"
        y="28"
        width="36"
        height="50"
        fill="none"
        stroke="#f8f6ee"
        strokeWidth="1.8"
      />
      <rect x="20" y="78" width="60" height="2" fill="#3a3f50" />
    </svg>
  ),
  whale: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#dad6cc" />
      <path
        d="M20 60 Q40 35 55 50 Q70 65 88 30"
        stroke="#1a1d28"
        strokeWidth="2"
        fill="none"
      />
      <line x1="62" y1="20" x2="62" y2="80" stroke="#c12a2a" strokeWidth="1" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#cdc8bd" />
      <polygon points="10,80 35,40 55,65 75,30 95,80" fill="#3a3f50" />
      <polygon points="35,40 42,50 28,50" fill="#fff" />
    </svg>
  ),
  diagram: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#0a0c14" />
      <g stroke="#e9e7df" strokeWidth=".7" fill="none">
        <circle cx="30" cy="40" r="3" />
        <circle cx="70" cy="40" r="3" />
        <polygon points="50,60 38,80 62,80" />
        <line x1="30" y1="40" x2="70" y2="40" />
        <line x1="30" y1="40" x2="50" y2="60" />
        <line x1="70" y1="40" x2="50" y2="60" />
      </g>
      <circle cx="78" cy="74" r="2" fill="#c12a2a" />
    </svg>
  ),
  geom: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#d2cdc1" />
      <polygon points="20,90 60,30 90,90" fill="#1a1d28" />
      <polygon points="10,90 30,60 50,90" fill="#3a3f50" />
      <circle cx="48" cy="78" r="1.5" fill="#1a1d28" />
    </svg>
  ),
  door: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#1a1d28" />
      <rect x="55" y="20" width="35" height="65" fill="#f2efe7" />
    </svg>
  ),
  cave: (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="100" fill="#0a0c14" />
      <path d="M0 60 Q50 20 100 60 L100 100 L0 100Z" fill="#1c2030" />
      <rect
        x="40"
        y="46"
        width="20"
        height="28"
        fill="none"
        stroke="#f8f6ee"
        strokeWidth="1.2"
      />
    </svg>
  ),
};

export function Tile({ kind }: { kind: TileKind }) {
  return <div className="thumb__img">{tiles[kind] ?? tiles.grid}</div>;
}
