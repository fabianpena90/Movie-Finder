import React from 'react';
import { Link } from 'react-router-dom';
import SearchMovie from '../searchMovie/SearchMovie'
import './LandigPage.css'

function LandingPage(props) {
  return (
    <div>
      <h1>Welcome to Movie Finder</h1>
      <img className="ui fluid image" src='img/cinema.png' alt='backgroundcinema'/>
      <SearchMovie />
      <div className="btn-group">
        <Link to="/ratedMovies">
          <button class="ui red animated button">
            <div class="visible content">Top Rated Movies</div>
            <div class="hidden content">
              <i aria-hidden="true" class="video icon"></i>
            </div>
          </button>
        </Link>
        <Link to="/popularMovies">
          <button class="ui red animated button">
            <div class="visible content">Popular Movies</div>
            <div class="hidden content">
              <i aria-hidden="true" class="video icon"></i>
            </div>
          </button>
        </Link>
        <Link to="/nowPlaying">
          <button class="ui red animated button">
            <div class="visible content">Now Playing</div>
            <div class="hidden content">
              <i aria-hidden="true" class="video icon"></i>
            </div>
          </button>
        </Link>
        <Link to="/upcomingMovies">
          <button class="ui red animated button">
            <div class="visible content">Upcoming Movies</div>
            <div class="hidden content">
              <i aria-hidden="true" class="video icon"></i>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;