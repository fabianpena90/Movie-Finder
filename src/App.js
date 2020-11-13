import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import RatedMovies from './components/RatedMovies'
import PopularMovies from './components/PopularMovies'
import NowPlayingMovies from './components/NowPlayingMovies'
import UpcomingMovies from './components/UpcomingMovies'
import MovieDetail from './components/MovieDetail'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/ratedMovies' component={RatedMovies} />
        <Route exact path='/popularMovies' component={PopularMovies} />
        <Route exact path='/nowPlaying' component={NowPlayingMovies} />
        <Route exact path='/upcomingMovies' component={UpcomingMovies} />
        <Route exact path='/nowPlaying/:id' render={(props) => <MovieDetail {...props}/>} />'
        <Route exact path='/addMovie' />'
      </Switch>
    </div>
  );
}

export default App;
