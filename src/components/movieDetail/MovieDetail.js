import React, { useEffect, useState } from "react";
import axios from "axios";
import Ratings from "../Ratings/Ratings";
import { Link } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail(props) {
  const [movieDetail, setMovieDetail] = useState([]);
  const [url, setUrl] = useState();
  const [video, setVideo] = useState();

  const key = process.env.REACT_APP_MOVIE_KEY;

  useEffect(() => {
    async function renderMovieDetail() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${key}&language=en-US`
      );
      console.log(res.data);
      setMovieDetail(res.data);

      const res2 = await axios.get(
        `https://api.themoviedb.org/3/configuration?api_key=${key}`
      );
      setUrl(res2.data.images.secure_base_url);

      const res3 = await axios.get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=${key}&language=en-US`
      );
      setVideo(res3.data.results[0].key);
    }
    renderMovieDetail();
  }, []);

  function renderInfo(languages, time, data) {
    const info = [];
    if (languages !== 0) {
      info.push(languages?.name);
    }
    info.push(time, data);
    return info
      .filter((el) => el !== null)
      .map((el) => (typeof el === "number" ? `${el} min.` : el))
      .map((el, i, array) => (i !== array.length - 1 ? `${el} / ` : el));
  }

  function splitYear(date) {
    if (!date) {
      return;
    }
    const [year] = date.split("-");
    return year;
  }

  function renderImdb(id) {
    if (!id) {
      return null;
    }
    return (
      <Link
        key={movieDetail.id}
        target="_blank"
        to={`https://www.imdb.com/title/${id}`}
      >
        <button className="ui red button">IMDB</button>
      </Link>
    );
  }

  function renderWebsite(link) {
    if (!link) {
      return null;
    }
    return (
      <Link target="_blank" to={link}>
        <button className="ui blue button">Website</button>
      </Link>
    );
  }

  return (
    <div className="ui container">
      <div key={movieDetail.id} className="ui divided items">
        <div className="item">
          <div className="img-poster">
            <img
              className="ui massive image"
              src={`${url}w780${movieDetail.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="content">
            <h1 className="l-header">{movieDetail.title}</h1>
            <div className="meta">
              <span className="cinema">
                <Ratings number={movieDetail.vote_average / 2} />
              </span>
            </div>
            <div className="description">
              <h2>The Genres</h2>
              {movieDetail.genres?.map((gen) => (
                <div className="genres-description">
                  <p>{gen.name}</p>
                </div>
              ))}
              <p className="movie-description">{movieDetail.overview}</p>
            </div>
            <div className="extra">
              <div className="ui label">
                <i aria-hidden="true" className="globe icon"></i>
                {renderInfo(
                  movieDetail.spoken_languages,
                  movieDetail.runtime,
                  splitYear(movieDetail.release_date)
                )}
              </div>
              {renderWebsite(movieDetail.homepage)}
              {renderImdb(movieDetail.imdb_id)}
              <Link
                to={`https://www.youtube.com/embed/${video}`}
                target="_blank"
              >
                <button className="ui purple button">Trailer</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/ratedMovies">
        <button className="ui yellow button btn">Back</button>
      </Link>
    </div>
  );
}

export default MovieDetail;
