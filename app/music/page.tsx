type SoundCloudTrackProps = {
  track_name: string;
};

async function getSoundcloudInfo(track_name: string) {
  const url = 'https://soundcloud.com/oembed';

  const params = new URLSearchParams({
    format: 'json',
    url: `https://soundcloud.com/vantreeseba/${track_name}`,
    maxheight: '200px',
    primaryColor: 'f4bf75',
  });

  return (await fetch(url + '?' + params)).json();
}

async function SoundCloudTrack({ track_name }: SoundCloudTrackProps) {
  const info = await getSoundcloudInfo(track_name);
  return <div style={{ width: '45vw' }} dangerouslySetInnerHTML={{ __html: info.html }}></div>;
}

const trackNames = [
  'chasing-neon',
  'belly-of-the-beast',
  'fg-st-1',
  'fg-st-2',
  'chillwave',
  'winter-woods-soundtrack',
  'vg-st-01',
  'vg-st-02',
  'vg-st-03',
  'vg-st-04',
  'chi-77-sewers',
  'summer-party',
  'cab-ride',
];

export default async function Music() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {trackNames.map((track_name) => (
        <SoundCloudTrack key={track_name} track_name={track_name} />
      ))}
    </div>
  );
}
