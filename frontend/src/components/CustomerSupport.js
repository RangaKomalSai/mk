import React from 'react';
import ContactDetails from './ContactDetails';
import './CustomerSupport.css';
import { Link } from 'react-router-dom';

const CustomerSupport = () => {
  return (
    <div className="customer-support">
      <div className='left'>
      <div className="user-info">
        <img src="pic.jpeg" alt="User" />
        <h2>Manasvi Kushwaha</h2>
        <p>Active membership since 2021</p>
      </div>
      <div className="support-section">
        <button id="contact">Call Us <p> +91 89626675833</p></button>
        
        <button id="Logout"> <Link to="/HomePagel">Logout  </Link></button>
      
      
      </div>
      </div>
      <div className="contact-info">
        <div id='one'>
        <p id="email">Email: support@xyz.com</p>
        <p >Phone (Our Country): +123-456-7890</p>
        </div>
        <div id="two">
        <p id="phone">Phone (Their Country): +098-765-4321</p>
        <p >Address: 123 XYZ Street, Our City, Our Country</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
