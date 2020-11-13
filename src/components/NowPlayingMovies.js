import React, { useState, useEffect} from 'react';
import axios from 'axios';

function NowPlayingMovies(props) {
  const [ nowPlayingMovies, setNowPlayingMovies ] = useState([])

  useEffect(() => {
    async function renderNowPlayingMovies() {
      let res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=2c9ff500cb9fada8c6e539f82c19f69c&language=en-US&page=1')
      console.log(res.data)
      setNowPlayingMovies(res.data)
    }
    renderNowPlayingMovies()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default NowPlayingMovies;