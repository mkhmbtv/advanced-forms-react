import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to='/sample'>Sample Survey</NavLink>
      <NavLink to='/sp'>Sensory Preferences</NavLink>
      <NavLink to='/report'>Report</NavLink>
      <NavLink exact to='/'>Home</NavLink>
    </nav>
  )
};

export default Navigation;