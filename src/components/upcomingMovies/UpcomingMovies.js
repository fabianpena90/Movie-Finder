import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import { Pagination } from "semantic-ui-react";

function UpcomingMovies(props) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [url, setUrl] = useState();
  const [page, setPage] = useState(1);

  const key = process.env.REACT_APP_MOVIE_KEY;

  useEffect(() => {
    async function renderUpcomingMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}`
      );
      setUpcomingMovies(res.data.results);

      const res2 = await axios.get(
        `https://api.themoviedb.org/3/configuration?api_key=${key}`
      );
      setUrl(res2.data.images.secure_base_url);
    }
    renderUpcomingMovies();
  }, [page]);

  const singleMovie = upcomingMovies.map((movieComing) => {
    return (
      <div className="rated-card">
        <div>
          <div>
            <img
              className="movie-poster"
              src={`${url}w780${movieComing.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="content">
            <h3>{movieComing.title}</h3>
          </div>
          <div>
            <Ratings className="rating" onRate={movieComing.vote_average / 2} />
          </div>
          <Link to={`/upcomingMovies/${movieComing.id}`}>More info...</Link>
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
        <h1>Upcoming Movies</h1>
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

export default UpcomingMovies;
