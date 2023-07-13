import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='home-header'>
    <h2>Welcome!!</h2>
    <h1>
      <span>“</span> My Blog App<span>”</span>
    </h1>
    <p>
      Make oneself cheerful, <br /> productive and entertained through
      daily updates.
    </p><br/>
    <button className="header-button"><Link className='header-link' to='/createpost'>
    Create Post
        </Link></button>
  </header>
);

export default Header;
