import useWorldTimeApi from './useWorldTimeApi';
import MeridiemIndicator from './MeridiemIndicator';
import TimeDisplay from './TimeDisplay';
interface CurrentTimeProps {
  timeZone: string;
  isMyTimeZone?: boolean;
}

export default function CurrentTime({
  timeZone,
  isMyTimeZone
}: CurrentTimeProps) {
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
      <div className="flex flex-col">
        <span className="text-3xl sm:text-5xl">{location}</span>
        {area}
      </div>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <TimeDisplay isMyTimeZone={isMyTimeZone} text="hours" time={hours} />
        <TimeDisplay
          isMyTimeZone={isMyTimeZone}
          text="min"
          time={currentTime.minutes}
        />
        <TimeDisplay
          isMyTimeZone={isMyTimeZone}
          text="sec"
          time={currentTime.seconds}
        />
        <MeridiemIndicator
          isMyTimeZone={isMyTimeZone}
          text={currentTime.meridiemIndicator}
        />
      </div>
    </>
  );
}
