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
      <p>Contact Us</p>
      <p>My Wishlist</p>
      <p>My Cart</p>
      <img src='profile.png' alt='profile' className='profile'></img>

    </nav>
  );
}

export default Navbar;