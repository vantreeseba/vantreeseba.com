import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import spotifyApi, { refreshToken } from '@/lib/spotify';
import Link from 'next/link';
import Image from 'next/image';
import { Disc } from 'lucide-react';

export const revalidate = 30;

async function topTracks() {
  await refreshToken();
  return spotifyApi.getMyTopTracks({ limit: 10 }).then((res) => res.body?.items);
}

async function currentlyListening() {
  await refreshToken();

  return spotifyApi.getMyCurrentPlaybackState({}).then((res) => res.body?.item);
}

type SpotifyTrackCardProps = {
  track: SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObjectFull | null;
};

function isType<T>(thing: any): thing is T {
  // little jank, but works for now, show does not exist on TrackObjectFull
  return thing.show != undefined;
}

function SpotifyTrackCard({ track }: SpotifyTrackCardProps) {
  if (track == null || isType<SpotifyApi.EpisodeObjectFull>(track)) {
    return null;
  }

  return (
    <Card key={track.name} className="max-w-lg grid grid-cols-3">
      <Image
        src={track.album.images[0]?.url}
        className="rounded-tl-lg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
        alt={''}
      />

      <div className="col-span-2">
        <CardHeader className="text-base0E">
          <CardTitle className="text-md">
            <Link href={track.uri}>{track.name}</Link>
          </CardTitle>
          <CardDescription className="text-base0B">
            <div className="col-span-2">{track.artists.map((x) => x.name).join(', ')}</div>
            <div className="col-span-2">{track.album.name}</div>
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}

export default async function Spotify() {
  const top = await topTracks();
  const now = await currentlyListening();

  return (
    <div className="justify-center justify-items-center grid">
      {now ? (
        <>
          <h1 className="text-2xl p-4">Currently Listening</h1>
          <div className="">
            <SpotifyTrackCard track={now} />
          </div>
        </>
      ) : null}

      <h1 className="text-2xl p-4">Top Tracks on Spotify</h1>
      <div className="grid grid-cols-2 gap-4">
        {top.map((x) => (
          <SpotifyTrackCard track={x} />
        ))}
      </div>
    </div>
  );
}
