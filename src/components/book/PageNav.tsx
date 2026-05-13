type Props = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
};

function PrevIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 49 50" fill="none">
      <rect
        x="-1.5"
        y="1.5"
        width="42.4506"
        height="43.4176"
        transform="matrix(-1 0 0 1 46 0)"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M1.99991 20.0439V48H29.3735"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M36.6045 23.3997L17.5461 23.3997"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M23.9961 32.176L15.9453 23.2553L23.8511 15.0437"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect
        x="1.5"
        y="1.5"
        width="43.4176"
        height="43.4176"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M48 20.0439V48H20.0439"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M12.6594 23.3997L32.1233 23.3997"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M25.5361 32.176L33.7582 23.2553L25.6842 15.0437"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function PageNav({ onPrev, onNext, canPrev, canNext }: Props) {
  return (
    <div className="pagenav">
      <button
        className="pagebtn pagebtn--prev"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Previous"
      >
        <PrevIcon />
      </button>
      <button
        className="pagebtn pagebtn--next"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Next"
      >
        <NextIcon />
      </button>
    </div>
  );
}
