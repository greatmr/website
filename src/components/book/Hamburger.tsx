type Props = {
  onClick: () => void;
};

export function Hamburger({ onClick }: Props) {
  return (
    <button className="hamburger" aria-label="Open menu" onClick={onClick}>
      <span />
      <span />
      <span />
    </button>
  );
}
