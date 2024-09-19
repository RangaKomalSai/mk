import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
    <div className='item'>
      <div className="logo">HARMAiG</div>
      <nav>
        <ul>
          <Link to='/login'>
          <li>Overview</li>
          </Link>
          <li>My Profile</li>
          <li>My Orders</li>
          <li>My Wishlist</li>
          <li>My Cart</li>
        </ul>
      </nav>
    </div>
      <div className="user-section">
        <button className="logout">Logout</button>
        <div className="user-icon">👤</div>
      </div>
    </header>
  );
};

export default Header;
