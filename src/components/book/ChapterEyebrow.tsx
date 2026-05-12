type Props = {
  side: "left" | "right";
  chapter: number;
  label: string;
};

export function ChapterEyebrow({ side, chapter, label }: Props) {
  return (
    <div className={`chapter-eyebrow chapter-eyebrow--${side}`}>
      Chapter {chapter} - {label}
    </div>
  );
}
