import React, { useState, useEffect} from 'react';
import axios from 'axios';

function UpcomingMovies(props) {
  const [ upcomingMovies, setUpcomingMovies ] = useState([]);
  const [ url, setUrl ] = useState();

  const key = process.env.REACT_APP_MOVIE_KEY

  useEffect(() => {
    async function renderUpcomingMovies() {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
      setUpcomingMovies(res.data.results)

      const res2 = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${key}`)
      setUrl(res2.data.images.secure_base_url)
    }
    renderUpcomingMovies()
  },[])

  let movies = upcomingMovies.map(movie => {
    return (
      <img src={`${url}w780${movie.poster_path}`} alt="movie"/>
    )
    
  })

  return (
    <div>
    {movies}
    </div>
  );
}

export default UpcomingMovies;