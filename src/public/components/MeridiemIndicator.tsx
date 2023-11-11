interface MeridiemIndicatorProps {
  text: string;
}

export default function MeridiemIndicator({ text }: MeridiemIndicatorProps) {
  return (
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">{text}</span>
    </div>
  );
}
