import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className='Left'>
        <img src="menu.png" alt="Menu Icon" className="icon" />
       <div className='search'>
        <img src="search.png" alt="Search Icon" className="icon" />
        <p>Search</p>
        </div>
      </div>
      <div className="navbar-brand">HARMAIG</div>
      <h4>Sign In</h4>
    </nav>
  );
}

export default Navbar;
