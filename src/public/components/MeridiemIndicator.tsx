interface MeridiemIndicatorProps {
  text: string;
  isMyTimeZone?: boolean;
}

export default function MeridiemIndicator({
  isMyTimeZone,
  text
}: MeridiemIndicatorProps) {
  return (
    <div className="flex flex-col">
      <span
        className={`countdown font-mono ${
          isMyTimeZone ? 'text-9xl' : 'text-5xl'
        }`}
      >
        {text}
      </span>
    </div>
  );
}
