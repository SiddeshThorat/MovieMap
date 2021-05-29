import React,{useState} from 'react';
import './App.css';
import Heading from './components/Heading/Heading.component';
import MainBody from './components/MainBody/MainBody.component';
import { Switch, Route,Link } from 'react-router-dom';
import QuestionSet from './components/QuestionSet/QuestionSet.component';
import  MovieContext  from './Context/MovieContext';
import { MOVIE_DATA } from './Context/Data';
import DisplayMovie from './components/DisplayMovie/DisplayMovie.component';

function App() {
  const [movieData, updateMovie] = useState(MOVIE_DATA)
  const updateMovieData = (movie) => updateMovie(movieData => [...movieData,movie])

  return (
      <div className="app">
        <MovieContext.Provider value={{
          movieData,
          updateMovieData
          }}>
            <Heading />
            <div className="addMovie">
                <Link to="/addmovie/questionSet1">
                    <button className="addButton">+</button>
                </Link>
            </div>
            <Switch>
                <Route exact path='/' component={MainBody} />
                <Route path='/addmovie/questionSet1' component={QuestionSet} />
                <Route path='/movie/:id' component={DisplayMovie} />
            </Switch>
        </MovieContext.Provider>
      </div>
  );
}

export default App;
