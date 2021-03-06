import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player"
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token)
    }
  });

  return (
    <div className="app">
      {token ? <Player/> : <Login />}
    </div>
  );
}

export default App;
//ad69a6137cb643b5acc5508030dee1fc
