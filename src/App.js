import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home';
import logo from './logo.png';

function App() {
  return (
    <div className='page-wrapper'>
      <header className='header'>
        <img className='header__logo' src={logo} alt='logo' />
        <h1>Survey Tool</h1>
      </header>
      <Navigation />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
