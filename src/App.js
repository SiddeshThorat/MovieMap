import './App.css';
import Heading from './components/Heading/Heading.component';
import MainBody from './components/MainBody/MainBody.component';
import { Switch, Route } from 'react-router-dom';
import FirstQuestionSet from './components/FirstQuestionSet/FirstQuestionSet.component';
import SecondQuestionSet from './components/SecondQuestionSet/SecondQuestionSet.component';
import ThirdQuestionSet from './components/ThirdQuestionSet/ThirdQuestionSet.component';


function App() {
  return (
      <div className="app">
        <Heading />
        <Switch>
          <Route exact path='/' component={MainBody} />
          <Route path='/addmovie/questionSet1' component={FirstQuestionSet} />
          <Route path='/addmovie/questionSet2' component={SecondQuestionSet} />
          <Route path='/addmovie/questionSet3' component={ThirdQuestionSet} />
        </Switch>
      </div>
  );
}

export default App;
