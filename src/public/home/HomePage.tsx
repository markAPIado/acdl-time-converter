import CurrentTime from '../components/CurrentTime';

export default function HomePage() {
  const timeZones = ['America/New_York', 'America/Los_Angeles', 'Asia/Tokyo'];

  return (
    <>
      <CurrentTime
        timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      />
      <ul>
        {timeZones.map((timeZone) => (
          <CurrentTime timeZone={timeZone} key={timeZone} />
        ))}
      </ul>
    </>
  );
}
