import React, { useState, useEffect } from "react";
import axios from "axios";
import Ratings from "../Ratings/Ratings";
import { Link } from "react-router-dom";
import { Pagination } from "semantic-ui-react";
import "./RatedMovies.css";

function RatedMovies(props) {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [url, setUrl] = useState();
  const [page, setPage] = useState(1);

  const key = process.env.REACT_APP_MOVIE_KEY;

  useEffect(() => {
    async function renderRatedMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}`
      );
      // console.log(res.data.results)
      setRatedMovies(res.data.results);

      const res2 = await axios.get(
        `https://api.themoviedb.org/3/configuration?api_key=${key}`
      );
      setUrl(res2.data.images.secure_base_url);
    }
    renderRatedMovies();
  }, [page]);

  const singleMovie = ratedMovies.map((movieRate) => {
    return (
      <div className="rated-card">
        <div className="rated-card-border">
          <div>
          <div>
            <img
              className="movie-poster"
              src={`${url}w780${movieRate.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="content">
            <h3>{movieRate.title}</h3>
          </div>
          <div>
            <Ratings
              className="rating"
              defaultRating={movieRate.vote_average / 2}
            />
          </div>
          <Link to={`/ratedMovies/${movieRate.id}`}>More info...</Link>
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
        <h1>Top Rated Movies</h1>
      </div>
      {singleMovie}
      <div className="pagination">
        <Pagination
          onPageChange={(e) => setPage(e.target.outerText)}
          defaultActivePage={page}
          totalPages={20}
        />
      </div>
    </div>
  );
}

export default RatedMovies;
