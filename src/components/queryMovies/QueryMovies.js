import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import "./QueryMovies.css";

function QueryMovies(props) {
  const [movieQuery, setMovieQuery] = useState([]);
  const [url, setUrl] = useState();

  const key = process.env.REACT_APP_MOVIE_KEY;

  useEffect(() => {
    async function renderSearchMovie() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${props.match.params.id}&page=1&include_adult=false`
      );
      console.log(res.data.results);
      setMovieQuery(res.data.results);

      const res2 = await axios.get(
        `https://api.themoviedb.org/3/configuration?api_key=${key}`
      );
      setUrl(res2.data.images.secure_base_url);
      console.log(res2.data.images);
    }
    renderSearchMovie();
  }, []);

  const result = movieQuery?.map((eachMovie) => {
    return (
      <div className="query-card">
        <div className="query-card-border">
          <div>
            <img
              className="movie-poster"
              src={`${url}w780${eachMovie.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="content">
            <h3>{eachMovie.title}</h3>
          </div>
          <div>
            <Ratings
              className="rating"
              defaultRating={eachMovie.vote_average / 2}
            />
          </div>
          <Link to={`/ratedMovies/${eachMovie.id}`}>More info...</Link>
        </div>
      </div>
    );
  });

  return (
    <div className="query-main-header">
      <h2 className="query-header">Search Results</h2>
      <div className="query-main-header">{result}</div>
    </div>
  );
}

export default QueryMovies;
