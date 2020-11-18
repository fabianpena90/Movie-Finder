import React from "react";
import { Link } from "react-router-dom";
// import SearchMovie from "../searchMovie/SearchMovie";
import "./LandigPage.css";

function LandingPage(props) {
  return (
    <div className="container">
      <img className="cinema-bg" src="/cinema.jpg" alt="" />
      <div className="home-content">
        <h1>Welcome to Movie Finder</h1>
        {/* <SearchMovie /> */}
        <div className="group-btn">
          <Link to="/ratedMovies">
            <button class="btn-landing">
              <h3 className="h3-landing">Top Rated Movies</h3>
            </button>
          </Link>
          <Link to="/popularMovies">
            <button class="btn-landing">
              <h3 className="h3-landing">Popular Movies</h3>
            </button>
          </Link>
          <Link to="/nowPlaying">
            <button class="btn-landing">
              <h3 className="h3-landing">Now Playing</h3>
            </button>
          </Link>
          <Link to="/upcomingMovies">
            <button class="btn-landing">
              <h3 className="h3-landing">Upcoming Movies</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
