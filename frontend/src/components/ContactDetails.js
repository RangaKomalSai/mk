import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className="contact-details">
          
      
      <div className="additional-info">
        <div>
          <h4>HELP</h4>
          <p>FAQ's</p>
          <p>Product Care</p>
          <p>Stores</p>
        </div>
        <div>
          <h4>SERVICES</h4>
          <p>Repairs</p>
          <p>Personalisation</p>
          <p>Art of Gifting</p>
        </div>
        <div>
          <h4>ABOUT XYZ</h4>
          <p>Fashion Shows, Arts & Culture, XYZ Maison</p>
          <p>Sustainability, Latest News</p>
          <p>Careers, Foundation XYZ</p>
        </div>
        <div>
          <h4>CONNECT</h4>
          <p>
          Can we help you?
          +91 8963675833
          Sign up for XYZ emails and receive the latest news and new collections. Follow Us</p>
        </div>
      </div>
      <div className="importer-info">
        <h4>Full Name and Address of the Manufacturer:</h4>
        <p>XYZ Maison SAS 2 Rue du Pont Neuf, 75034 Paris CEDEX 01 FRANCE</p>
        <h4>Full Name and Address of the Importer:</h4>
        <p>XYZ India Retail Private Limited 901A Nish Tech, Time Tower, MG Road Gurgaon, Haryana - 122002 INDIA</p>
        <p>Please refer to the product label for specific country of origin for each product.</p>
      </div>
    </div>
  );
};

export default ContactDetails;
