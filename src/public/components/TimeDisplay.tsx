interface TimeDisplayProps {
  time: number;
  text: string;
  isMyTimeZone?: boolean;
}

export default function TimeDisplay({
  isMyTimeZone,
  text,
  time
}: TimeDisplayProps) {
  return (
    <div className="mb-5 flex flex-col">
      <span
        className={`countdown font-mono ${
          isMyTimeZone ? 'text-9xl' : 'text-5xl'
        }`}
      >
        <span style={{ '--value': time } as React.CSSProperties}></span>
      </span>
      <span className={`${isMyTimeZone ? 'text-xl' : 'text-sm'}`}>{text}</span>
    </div>
  );
}
