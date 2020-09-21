import spotifyApi, { refreshToken } from '../../../lib/spotify';

export default async(_, res) => {
  await refreshToken();

  return spotifyApi.getMyTopTracks({ limit: 8 })
    .then(function(data) {
      res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
      res.send(data.body);
    }, function(err) {
      res.status(500);
      res.send(err);
    });
};
