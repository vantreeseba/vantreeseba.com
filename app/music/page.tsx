type SoundCloudTrackProps = {
  track_id: number;
};

function SoundCloudTrack({ track_id }: SoundCloudTrackProps) {
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track_id}`}
    ></iframe>
  );
}

const tracks = [
  1594002606, //'fg-st-1'
  1656481254, //'fg-st-2'
];

export default async function Music() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tracks.map((x) => (
        <SoundCloudTrack track_id={x} />
      ))}
    </div>
  );
}
