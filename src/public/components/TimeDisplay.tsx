interface TimeDisplayProps {
  time: number;
  text: string;
}

export default function TimeDisplay({ time, text }: TimeDisplayProps) {
  return (
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': time } as React.CSSProperties}></span>
      </span>
      {text}
    </div>
  );
}
