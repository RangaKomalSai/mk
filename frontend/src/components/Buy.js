import React, { useState } from "react";
import "./Buy.css";
import Card from "../components/Card"
const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {title}
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};
// if (setIsOpen = false) {
//   const closed-Address = document.querySelector(".closed-address");
//   closed-Address.style.display = "none";
//   }

const Buy = () => {
  const [formData, setFormData] = useState({
    Address: "",
    City: "",
    State: "",
    Country: "",
    Qty:"",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="app">
      <main className="app-main">
        <div className="content">
          <Dropdown title="Delivery Address">
            
              <div>
                <label>Address1</label>
                <input
                  type="Address1"
                  name="Address1"
                  placeholder="Enter the Address"
                  value={formData.Address1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>City</label>
                <input
                  name="City"
                  type="City"
                  placeholder="Enter the City"
                  value={formData.City}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>State</label>
                <input
                  type="State"
                  name="State"
                  placeholder="Enter the State"
                  value={formData.State}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  type="Country"
                  name="Country"
                  placeholder="Enter the Country"
                  value={formData.Country}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="Add">Add Address</button>
            
          </Dropdown>
          <div className="closed-address">
           
            <input type="checkbox" className="check"></input>
            <div className="adress">
            <p>Address : Megha Kushwaha, 1234567890, Rewa, Madhya Pradesh, India, 486001</p>
            </div>
            
            <button className="remove-address">Remove</button>
          </div> 
          <Dropdown title="Order Summary">
            <div className="order-summary">
              
            <Card/>
           
            <div className="desc">
              
              <h2>Weight:100g</h2>
              <p>Delievery by Mon 19 Jan</p>
              <button className="remove-address">Remove</button>
            </div>
            
            </div>
          </Dropdown>
          <Dropdown title="Payment">
            <div className="payment">
            

  <div>
    <input type="radio" id="huey" name="drone" value="huey"/>
    <label for="huey">
      <div>
      <h3>Payment with UPI</h3><br/>
      <input
                  type="UPI"
                  name="upi"
                  placeholder="Enter the State"
                  value={formData.State}
                  onChange={handleChange}
                  required
                />
      </div>
    </label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey"><div>
      <h3>Payment with UPI</h3><br/>
      <input
                  type="UPI"
                  name="upi"
                  placeholder="Enter the State"
                  value={formData.State}
                  onChange={handleChange}
                  required
                />
      </div></label>

  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie"><div>
      <h3>Payment with UPI</h3><br/>
      <input
                  type="UPI"
                  name="upi"
                  placeholder="Enter the State"
                  value={formData.State}
                  onChange={handleChange}
                  required
                />
      </div></label>
  </div>

            </div>
          </Dropdown>
        </div>
        <div className="image-placeholder">
         <p>Price : $11,000</p>
         <p>Dilevery: $12</p>
         <p>Total: $11,012</p>
        </div>
      </main>
    </div>
  );
};

export default Buy;