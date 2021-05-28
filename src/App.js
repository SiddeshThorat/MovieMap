import React,{useState} from 'react';
import './App.css';
import Heading from './components/Heading/Heading.component';
import MainBody from './components/MainBody/MainBody.component';
import { Switch, Route,Link } from 'react-router-dom';
import FirstQuestionSet from './components/FirstQuestionSet/FirstQuestionSet.component';
import  MovieContext  from './Context/MovieContext';
import { MOVIE_DATA } from './Context/Data';


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
                    <button className="addButton">Add Movie</button>
                </Link>
            </div>
            <Switch>
                <Route exact path='/' component={MainBody} />
                <Route path='/addmovie/questionSet1' component={FirstQuestionSet} />
            </Switch>
        </MovieContext.Provider>
      </div>
  );
}

export default App;
