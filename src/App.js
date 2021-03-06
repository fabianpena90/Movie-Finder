import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import RatedMovies from "./components/ratedMovie/RatedMovies";
import PopularMovies from "./components/popularMovies/PopularMovies";
import NowPlayingMovies from "./components/nowPlaying/NowPlayingMovies";
import UpcomingMovies from "./components/upcomingMovies/UpcomingMovies";
import MovieDetail from "./components/movieDetail/MovieDetail";
import QueryMovies from "./components/queryMovies/QueryMovies";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ratedMovies" component={RatedMovies} />
        <Route exact path="/popularMovies" component={PopularMovies} />
        <Route exact path="/nowPlaying" component={NowPlayingMovies} />
        <Route exact path="/upcomingMovies" component={UpcomingMovies} />
        <Route exact path="/searchMovie" />
        <Route
          exact
          path="/ratedMovies/:id"
          render={(props) => <MovieDetail {...props} />}
        />
        '
        <Route
          exact
          path="/nowPlaying/:id"
          render={(props) => <MovieDetail {...props} />}
        />
        '
        <Route
          exact
          path="/popularMovies/:id"
          render={(props) => <MovieDetail {...props} />}
        />
        '
        <Route
          exact
          path="/upcomingMovies/:id"
          render={(props) => <MovieDetail {...props} />}
        />
        '
        <Route
          exact
          path="/searchMovies/:id"
          render={(props) => <QueryMovies {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
