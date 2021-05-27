import './App.css';
import Heading from './components/Heading/Heading.component';
import MainBody from './components/MainBody/MainBody.component';
import AddMovie from './components/AddMovie/AddMovie.component';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Heading />
      <Switch>
        <Route exact path='/' component={MainBody} />
        <Route path='/addmovie' component={AddMovie} />
      </Switch>
      
    </div>
  );
}

export default App;
