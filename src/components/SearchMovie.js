import React, { useState, useEffect} from 'react';
import axios from 'axios';

function SearchMovie(props) {
  const [ searchMovie, setSearchMovie ] = useState([])
  const [ text, setText ] = useState('')

  useEffect(() => {
    async function renderSearchMovie() {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2c9ff500cb9fada8c6e539f82c19f69c&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
      console.log(res.data)
      setSearchMovie(res.data)
    }
    renderSearchMovie()
  },[])
 
  
  function handleChange(e){
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Click</button>
    </div>
  );
}

export default SearchMovie;