import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home';

function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
