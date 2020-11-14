import React from 'react';
import { Link } from 'react-router-dom';
import SearchMovie from '../searchMovie/SearchMovie'
import './LandigPage.css'

function LandingPage(props) {
  return (
    <div>
      <h1 className="ui centered aligned header">Welcome to Movie Finder</h1>
      <img className="ui fluid image" src='./myke-simon-atsUqIm3wxo-unsplash.png' alt='backgroundcinema'/>
      <SearchMovie />
      <Link to="/ratedMovies">
        <button >Top Rated Movies</button>
      </Link>
      <Link to="/popularMovies">
        <button >Popular Movies</button>
      </Link>
      <Link to="/nowPlaying">
        <button >Now Playing</button>
      </Link>
      <Link to="/upcomingMovies">
        <button >Upcoming Movies</button>
      </Link>
    </div>
  );
}

export default LandingPage;