import useWorldTimeApi from '../hooks/useWorldTimeApi';
interface CurrentTimeProps {
  timeZone: string;
}

export default function CurrentTime({ timeZone }: CurrentTimeProps) {
  const { currentTime } = useWorldTimeApi(timeZone);

  const hours =
    currentTime.hours === 0
      ? 12
      : currentTime.hours > 12
      ? currentTime.hours - 12
      : currentTime.hours;

  return (
    <>
      <div className="mr-20 flex flex-col">
        <span className="countdown font-mono text-5xl">
          {timeZone.split('/')[1]?.split('_').join(' ') ??
            timeZone.split('/')[0]}
        </span>
        {timeZone.split('/')[0]}
      </div>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': hours } as React.CSSProperties}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ '--value': currentTime.minutes } as React.CSSProperties}
            ></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ '--value': currentTime.seconds } as React.CSSProperties}
            ></span>
          </span>
          sec
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            {currentTime.meridiemIndicator}
          </span>
        </div>
      </div>
    </>
  );
}
