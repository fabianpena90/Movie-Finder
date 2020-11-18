import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Ratings from "../Ratings/Ratings";
import { Pagination } from "semantic-ui-react";

function NowPlayingMovies(props) {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [url, setUrl] = useState();
  const [page, setPage] = useState(1);

  const key = process.env.REACT_APP_MOVIE_KEY;

  useEffect(() => {
    async function renderNowPlayingMovies() {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}`
      );
      console.log(res.data);
      setNowPlayingMovies(res.data.results);

      const res2 = await axios.get(
        `https://api.themoviedb.org/3/configuration?api_key=${key}`
      );
      setUrl(res2.data.images.secure_base_url);
    }
    renderNowPlayingMovies();
  }, [page]);

  const singleMovie = nowPlayingMovies.map((movieNow) => {
    return (
      <div className="rated-card">
        <div>
          <div>
            <img
              className="movie-poster"
              src={`${url}w780${movieNow.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="content">
            <h3>{movieNow.title}</h3>
          </div>
          <div>
            <Ratings
              className="rating"
              defaultRating={movieNow.vote_average / 2}
            />
          </div>
          <Link to={`/nowPlaying/${movieNow.id}`}>More info...</Link>
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
        <h1>Now Playing</h1>
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

export default NowPlayingMovies;
