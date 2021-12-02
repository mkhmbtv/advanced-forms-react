import Navigation from "./components/Navigation";
import logo from './logo.png';

function App() {
  return (
    <div className='page-wrapper'>
      <header className='header'>
        <img className='header__logo' src={logo} alt='logo' />
        <h1>Survey Tool</h1>
      </header>
      <Navigation />
    </div>
  );
}

export default App;
