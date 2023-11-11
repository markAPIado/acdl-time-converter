import { useEffect, useState } from 'react';
interface CurrentTimeProps {
  timeZone: string;
  isMyTimeZone?: boolean;
}

export default function CurrentTime({
  timeZone,
  isMyTimeZone
}: CurrentTimeProps) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentTime(data.datetime);
      });
  }, [timeZone, isMyTimeZone]);

  const date = new Date(currentTime);

  let hours = date.getHours();
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  const minutes = date.getMinutes();

  const seconds = date.getSeconds();

  const meridiemIndicator = date.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <>
      <div className="mr-20 flex flex-col">
        <span className="countdown font-mono text-5xl">
          {timeZone.split('/')[1]
            ? timeZone.split('/')[1].split('_').join(' ')
            : timeZone.split('/')[0]}
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
            <span style={{ '--value': minutes } as React.CSSProperties}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': seconds } as React.CSSProperties}></span>
          </span>
          sec
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            {meridiemIndicator}
          </span>
        </div>
      </div>
    </>
  );
}
