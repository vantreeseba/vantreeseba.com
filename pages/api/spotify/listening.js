import spotifyApi, { refreshToken } from '../../../lib/spotify';

export default async(_, res) => {
  await refreshToken();

  return spotifyApi.getMyCurrentPlaybackState({})
    .then(function(data) {
      res.setHeader('Cache-Control', 'max-age=0, s-maxage=30');
      res.json(data.body);
    }, function(err) {
      res.status(500);
      res.send({ error: err });
    });
};
