import React, { useState, useEffect } from "react";
import axios from "axios";
import Ratings from "../Ratings/Ratings";
import { Link } from "react-router-dom";

function RatedMovies(props) {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [url, setUrl] = useState();

  const key = process.env.REACT_APP_MOVIE_KEY;

  useEffect(() => {
    async function renderRatedMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
      );
      // console.log(res.data.results)
      setRatedMovies(res.data.results);

      const res2 = await axios.get(
        `https://api.themoviedb.org/3/configuration?api_key=${key}`
      );
      setUrl(res2.data.images.secure_base_url);
    }
    renderRatedMovies();
  }, []);

  const singleMovie = ratedMovies.map((movieRate) => {
    return (
      <div className="ui cards">
        <div class="ui card">
          <div class="image">
            <img
              src={`${url}w780${movieRate.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div class="content">
            <div class="header">{movieRate.title}</div>
          </div>
          <div class="extra content">
            <Ratings defaultRating={movieRate.vote_average / 2} />
          </div>
          <Link to={`/ratedMovies/${movieRate.id}`}>More info...</Link>
        </div>
      </div>
    );
  });

  return <div>{singleMovie}</div>;
}

export default RatedMovies;
