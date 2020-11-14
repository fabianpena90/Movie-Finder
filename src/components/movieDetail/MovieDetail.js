import React, { useEffect, useState} from 'react';
import axios from 'axios'

function MovieDetail(props) {
  const [ movieDetail, setMovieDetail ] = useState([])

  console.log(props)

  const key = process.env.REACT_APP_MOVIE_KEY

  useEffect(() => {
    async function renderMovieDetail() {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${key}&language=en-US`)
      console.log(res.data)
      setMovieDetail(res.data)
    }
    renderMovieDetail()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default MovieDetail;