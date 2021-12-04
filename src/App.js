import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Survey from './components/Survey';
import Report from "./components/Report/Report";

import sampleSurvey from './mockdata/sample.json';
import sensoryPreferencesSurvey from './mockdata/spi.json';

function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sample'>
          <Survey survey={sampleSurvey}/>
        </Route>
        <Route path='/spi'>
          <Survey survey={sensoryPreferencesSurvey} />
        </Route>
        <Route path='/report'>
          <Report />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
