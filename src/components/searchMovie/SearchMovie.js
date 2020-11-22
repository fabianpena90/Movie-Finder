import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchMovie.css";

function SearchMovie(props) {
  const [searchMovie, setSearchMovie] = useState([]);

  return (
    <div className="search-div">
      <input
        className="input-search"
        type="text"
        onChange={(e) => setSearchMovie(e.target.value)}
        placeholder="Movies"
        required
      />
      <Link to={`/searchMovies/${searchMovie}`}>
        <button className="btn">Search</button>
      </Link>
    </div>
  );
}

export default SearchMovie;
