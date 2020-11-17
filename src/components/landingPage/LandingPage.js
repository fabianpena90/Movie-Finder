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
            <button class="ui blue animated button">
              <div class="visible content">Top Rated Movies</div>
              <div class="hidden content">
                <i aria-hidden="true" class="video icon"></i>
              </div>
            </button>
          </Link>
          <Link to="/popularMovies">
            <button class="ui blue animated button">
              <div class="visible content">Popular Movies</div>
              <div class="hidden content">
                <i aria-hidden="true" class="video icon"></i>
              </div>
            </button>
          </Link>
          <Link to="/nowPlaying">
            <button class="ui blue animated button">
              <div class="visible content">Now Playing</div>
              <div class="hidden content">
                <i aria-hidden="true" class="video icon"></i>
              </div>
            </button>
          </Link>
          <Link to="/upcomingMovies">
            <button class="ui blue animated button">
              <div class="visible content">Upcoming Movies</div>
              <div class="hidden content">
                <i aria-hidden="true" class="video icon"></i>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
