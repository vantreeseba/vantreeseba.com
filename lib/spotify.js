var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/spotify/callback'
});

spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN);

export function refreshToken() {
  return spotifyApi.refreshAccessToken().then(data => {
    spotifyApi.setAccessToken(data.body.access_token);
  });
}

export default spotifyApi;

