import moment from 'moment-timezone';
import { useEffect, useState } from 'react';

interface WordlTime {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

function useWorldTimeApi(timeZone: string) {
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    meridiemIndicator: ''
  });

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
      .then((response) => response.json() as Promise<WordlTime>)
      .then((data) => {
        const timeInTimeZone = moment.utc(data.datetime).tz(timeZone);
        setCurrentTime({
          hours: timeInTimeZone.hours(),
          minutes: timeInTimeZone.minutes(),
          seconds: timeInTimeZone.seconds(),
          meridiemIndicator: timeInTimeZone.format('A')
        });
      });
  }, [timeZone]);

  return { currentTime };
}

export default useWorldTimeApi;
