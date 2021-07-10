import '../App.css';
import {Link} from 'react-router-dom'

const Header=()=> {
  return (
    <>
      <h1>React Router Basics</h1>
      <h4>Navigate</h4>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
