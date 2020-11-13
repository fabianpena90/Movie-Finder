import React, { useState, useEffect} from 'react';
import axios from 'axios';

function PopularMovies(props) {
  const [ popularMovies, setPopularMovies ] = useState([])
  
  useEffect(() => {
    async function renderPopularMovies() {
      let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2c9ff500cb9fada8c6e539f82c19f69c&language=en-US&page=1')
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