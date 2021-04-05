import { useEffect } from 'react';
import './App.css';

import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './context/DataLayer';


// Components
import Login from './components/Login';
import Player from './components/Player';

const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""

    const _token = hash.access_token

    if (_token) {
      
      spotify.setAccessToken(_token)

      dispatch({
        type: 'SET_TOKEN',
        _token
      })
      
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })
    
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists)
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      })
    
      spotify.getPlaylist('37i9dQZEVXcWTU1pOrzy1u').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })

    }

  }, [dispatch])
  

  return (

    <div className="app">
      { token ? < Player/> : < Login/> }
    </div>
  );
}

export default App;
