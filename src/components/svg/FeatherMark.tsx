type Props = {
  color?: string;
};

export function FeatherMark({ color = "#fff" }: Props) {
  return (
    <svg
      viewBox="0 0 60 100"
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M30 8 C 18 28, 18 50, 26 76" />
      <path d="M30 8 C 42 28, 42 50, 34 76" />
      <path d="M22 30 C 30 36, 30 36, 38 30" />
      <path d="M20 50 C 30 58, 30 58, 40 50" />
      <path d="M30 8 L 30 90" />
    </svg>
  );
}
