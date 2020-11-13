import React, { useEffect, useState} from 'react';
import axios from 'axios'

function MovieDetail(props) {
  console.log(props)

  const key = process.env.REACT_APP_MOVIE_KEY

  useEffect(() => {
    async function renderMovieDetail() {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/671039?api_key=${key}&language=en-US`)
    }
    renderMovieDetail()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default MovieDetail;