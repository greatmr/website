type Props = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
};

export function PageNav({ onPrev, onNext, canPrev, canNext }: Props) {
  return (
    <>
      <div className="pagenav">
        <button
          className="pagebtn"
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M5 12l6-6M5 12l6 6" />
          </svg>
        </button>
      </div>
      <div className="pagenav pagenav--right">
        <button
          className="pagebtn"
          onClick={onNext}
          disabled={!canNext}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
