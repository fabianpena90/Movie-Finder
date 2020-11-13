import React, { useState, useEffect} from 'react';
import axios from 'axios';

function NowPlayingMovies(props) {
  const [ nowPlayingMovies, setNowPlayingMovies ] = useState([])

  const key = process.env.REACT_APP_MOVIE_KEY

  useEffect(() => {
    async function renderNowPlayingMovies() {
      let res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
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