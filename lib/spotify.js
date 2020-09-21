var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/spotify/callback'
});

spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN);
spotifyApi.setAccessToken(process.env.SPOTIFY_TOKEN);

export default spotifyApi;

