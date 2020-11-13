import React from 'react';
import { Link } from 'react-router-dom'

function LandingPage(props) {
  return (
    <div>
      <h1>Welcome to Movie Finder </h1>
      <Link to="/ratedMovies">
        <button >Top Rated Movies</button>
      </Link>
      <Link to="/popularMovies">
        <button >Popular Movies</button>
      </Link>
      <Link to="/nowPlaying">
        <button >Now Playing</button>
      </Link>
    </div>
  );
}

export default LandingPage;