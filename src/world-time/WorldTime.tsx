import { useState } from 'react';
import { LuRefreshCcw } from 'react-icons/lu';
import CurrentTime from './CurrentTime';

export default function WorldTime() {
  const timeZones = ['America/New_York', 'EST', 'Asia/Tokyo'];

  const [refetchTime, setRefetchTime] = useState(false);

  const handleRefetchTime = () => {
    setRefetchTime(!refetchTime);
    setTimeout(() => setRefetchTime(false), 0);
  };

  if (refetchTime) return null;

  return (
    <div className="mb-10">
      <div className="mb-20">
        <CurrentTime
          isMyTimeZone={true}
          timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
        />
        <button className="btn btn-neutral" onClick={handleRefetchTime}>
          <LuRefreshCcw /> Get Current Time
        </button>
      </div>
      <ul>
        {timeZones.map((timeZone) => (
          <CurrentTime timeZone={timeZone} key={timeZone} />
        ))}
      </ul>
    </div>
  );
}
