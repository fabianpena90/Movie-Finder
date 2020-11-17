import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SearchMovie.css";

function SearchMovie(props) {
  const [searchMovie, setSearchMovie] = useState([]);
  const [text, setText] = useState("");

  const key = process.env.REACT_APP_MOVIE_KEY;

  async function renderSearchMovie() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${text}&page=1&include_adult=false`
    );
    console.log(res.data.results);
    setSearchMovie(res.data.results);
  }

  function getMovie(e) {
    setText(e.target.value);
  }

  return (
    <div className="search-div">
      <input
        className="input-search"
        type="text"
        onChange={getMovie}
        placeholder="Movies"
        required
      />
      <Link to="/searchMovie">
        <button onClick={renderSearchMovie} className="btn">
          Search
        </button>
      </Link>
    </div>
  );
}

export default SearchMovie;
