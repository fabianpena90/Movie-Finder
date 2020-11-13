import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import RatedMovies from './components/RatedMovies'
import PopularMovies from './components/PopularMovies'
import NowPlayingMovies from './components/NowPlayingMovies'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/ratedMovies' component={RatedMovies} />
        <Route exact path='/popularMovies' component={PopularMovies} />
        <Route exact path='/nowPlaying' component={NowPlayingMovies} />
        <Route exact path='/movies/:id' />'
        <Route exact path='/addMovie' />'
      </Switch>
    </div>
  );
}

export default App;
