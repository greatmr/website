type Props = {
  total: number;
  current: number;
  onJump: (index: number) => void;
};

export function Progress({ total, current, onJump }: Props) {
  return (
    <div className="progress">
      {Array.from({ length: total }).map((_, i) => {
        const isCurrent = i === current;
        return (
          <button
            key={i}
            type="button"
            className={"progress__dot" + (isCurrent ? " is-current" : "")}
            onClick={() => onJump(i)}
            aria-label={`Go to spread ${i + 1}`}
            aria-current={isCurrent ? "page" : undefined}
          >
            <svg
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className="progress__outer"
                d="M34.8789 18.5L18.5 34.8789L2.12109 18.5L18.5 2.12109L34.8789 18.5Z"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="progress__inner"
                d="M18.467 13L23.967 18.5L18.467 24L12.967 18.5L18.467 13Z"
                fill="currentColor"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
