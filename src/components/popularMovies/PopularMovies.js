import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ratings from "../Ratings/Ratings";

function PopularMovies(props) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [url, setUrl] = useState();

  const key = process.env.REACT_APP_MOVIE_KEY;

  useEffect(() => {
    async function renderPopularMovies() {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
      );
      console.log(res.data);
      setPopularMovies(res.data.results);

      const res2 = await axios.get(
        `https://api.themoviedb.org/3/configuration?api_key=${key}`
      );
      setUrl(res2.data.images.secure_base_url);
    }
    renderPopularMovies();
  }, []);

  const singleMovie = popularMovies.map((moviePopular) => {
    return (
      <div className="rated-card">
        <div>
          <div>
            <img
              className="movie-poster"
              src={`${url}w780${moviePopular.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="content">
            <h3>{moviePopular.title}</h3>
          </div>
          <div>
            <Ratings
              className="rating"
              defaultRating={moviePopular.vote_average / 2}
            />
          </div>
          <Link to={`/popularMovies/${moviePopular.id}`}>More info...</Link>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="l-heading">
        <Link to="/">
          <button class="ui right floated button">Back</button>
        </Link>
        <h1>Popular Movies</h1>
      </div>
      {singleMovie}
    </div>
  );
}

export default PopularMovies;
