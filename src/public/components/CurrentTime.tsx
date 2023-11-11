import useWorldTimeApi from '../hooks/useWorldTimeApi';
import MeridiemIndicator from './MeridiemIndicator';
import TimeDisplay from './TimeDisplay';
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

  const location =
    timeZone.split('/')[1]?.split('_').join(' ') ?? timeZone.split('/')[0];

  const area = timeZone.split('/')[0];

  return (
    <>
      <div className="mr-20 flex flex-col">
        <span className="countdown font-mono text-5xl">{location}</span>
        {area}
      </div>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <TimeDisplay time={hours} text="hours" />
        <TimeDisplay time={currentTime.minutes} text="min" />
        <TimeDisplay time={currentTime.seconds} text="sec" />
        <MeridiemIndicator text={currentTime.meridiemIndicator} />
      </div>
    </>
  );
}
