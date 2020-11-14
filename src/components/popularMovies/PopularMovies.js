import React, { useState, useEffect} from 'react';
import axios from 'axios';

function PopularMovies(props) {
  const [ popularMovies, setPopularMovies ] = useState([])

  const key = process.env.REACT_APP_MOVIE_KEY
  
  useEffect(() => {
    async function renderPopularMovies() {
      let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      console.log(res.data)
      setPopularMovies(res.data)
    }
    renderPopularMovies()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default PopularMovies;