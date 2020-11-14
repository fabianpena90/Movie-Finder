import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import {Link} from 'react-router-dom'

function RatedMovies(props) {
  const [ ratedMovies, setRatedMovies ] = useState([])

  const key = process.env.REACT_APP_MOVIE_KEY
  
  useEffect(() => {
    async function renderRatedMovies() {
      let res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
      console.log(res.data)
      setRatedMovies(res.data)
    }
    renderRatedMovies()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default RatedMovies;