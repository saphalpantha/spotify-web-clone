import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer'
const spotify = new SpotifyWebApi();

function App() {
  const [{user},dispatch] = useDataLayerValue()
  const [token, setToken] = useState(null)
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      setToken(_token)
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })
      spotify.setAccessToken(token)
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type:'SET_USER',
          user:user,
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
        console.log(playlists)
      }).catch((err) => {
        console.log("playlist err" , err)
      })
    }
    console.log("token" , token)

  

  }, [])
  return (
    <div className="app">
      {
        token ? (
          // <h1>I am logged in</h1>
          <Player spotify={spotify}/>
        ):(
          <Login/>
        )

      }
      {/* spotify logo */}
      {/* login with spotify */}
    </div>
    );
}

export default App;
