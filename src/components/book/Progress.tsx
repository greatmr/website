type Props = {
  total: number;
  current: number;
  onJump: (index: number) => void;
};

export function Progress({ total, current, onJump }: Props) {
  return (
    <div className="progress">
      {Array.from({ length: total }).map((_, i) => {
        const cls =
          i === current ? "is-current" : i < current ? "is-active" : "";
        return (
          <span
            key={i}
            className={cls}
            onClick={() => onJump(i)}
            role="button"
            aria-label={`Go to spread ${i + 1}`}
          />
        );
      })}
    </div>
  );
}
