import CurrentTime from '../components/CurrentTime';

export default function HomePage() {
  const timeZones = ['America/New_York', 'America/Los_Angeles', 'Asia/Tokyo'];

  return (
    <>
      <div className="mb-20">
        <CurrentTime
          isMyTimeZone={true}
          timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
        />
      </div>
      <ul>
        {timeZones.map((timeZone) => (
          <CurrentTime timeZone={timeZone} key={timeZone} />
        ))}
      </ul>
    </>
  );
}
