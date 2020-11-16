import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './SearchMovie.css'

function SearchMovie(props) {
  const [ searchMovie, setSearchMovie ] = useState([])
  const [ text, setText ] = useState('')

  const key = process.env.REACT_APP_MOVIE_KEY

  async function renderSearchMovie() {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${text}&page=1&include_adult=false`)
    console.log(res.data)
    setSearchMovie(res.data)
  }

  function getMovie(e) {
    setText(e.target.value)
  }
  

  return (
    <div class="ui action input">
      <input className="input-search" type="text" onChange={getMovie} placeholder="Movies"/>
      <button onClick={renderSearchMovie} class="ui button">Search</button>
    </div>
  );
}

export default SearchMovie;

