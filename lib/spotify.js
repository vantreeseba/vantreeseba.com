var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({});

var token = process.env.SPOTIFY_TOKEN;

if(token) {
  spotifyApi.setAccessToken(token);
} else {
  console.log('No SPOTIFY_TOKEN provided.');
}

export default spotifyApi;

