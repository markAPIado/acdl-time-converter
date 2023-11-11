import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
interface CurrentTimeProps {
  timeZone: string;
}

export default function CurrentTime({ timeZone }: CurrentTimeProps) {
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    meridiemIndicator: ''
  });

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
      .then((response) => response.json())
      .then((data) => {
        const timeInTimeZone = moment.utc(data.dateTime).tz(timeZone);
        setCurrentTime({
          hours: timeInTimeZone.hours(),
          minutes: timeInTimeZone.minutes(),
          seconds: timeInTimeZone.seconds(),
          meridiemIndicator: timeInTimeZone.format('A')
        });
      });
  }, [timeZone]);

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
            <span
              style={{ '--value': currentTime.hours } as React.CSSProperties}
            ></span>
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
