import React from 'react';
import './Navbar.css';

const Navbar = ({ onShowForm }) => (
  <header>
    <h2><a>Recipe App</a></h2>
    <nav>
      <li><a onClick={onShowForm}>New Recipe</a></li>
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Contact Us</a></li>
    </nav>
  </header>
);

export default Navbar;
