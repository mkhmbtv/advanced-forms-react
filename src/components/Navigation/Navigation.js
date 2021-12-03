import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../logo.png';

const Navigation = () => {
  return (
    <>
      <header className='header'>
        <img className='header__logo' src={logo} alt='logo' />
        <h1>Survey Tool</h1>
      </header>
      <nav>
        <NavLink to='/sample'>Sample Survey</NavLink>
        <NavLink to='/spi'>Sensory Preferences</NavLink>
        <NavLink to='/report'>Report</NavLink>
        <NavLink exact to='/'>Home</NavLink>
      </nav>
    </>
  )
};

export default Navigation;