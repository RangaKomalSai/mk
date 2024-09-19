import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Log.css";
function Log() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    subscribe: false,
    privacyPolicy: false,
  });

  const [errorMessage, setErrorMessage] = useState(""); // To store any login errors

  const navigate = useNavigate(); // To navigate after successful login

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Assuming the API returns a JWT token on successful login
      const { token } = response.data;

      // You can store the token in localStorage or any other secure storage
      localStorage.setItem("authToken", token);

      // Redirect to homepage or another protected page after login
      navigate("/Homepagel");
    } catch (error) {
      // If there's an error (e.g., wrong email/password), set the error message
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      <div>
        <h2>Welcome </h2>
        <p className="l2">
          Login to your account to have access to a more personalized experience
        </p>
      </div>
      <div className="content">
        <div className="l" id="left">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter the password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div className="bu">
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <we className="bi">Subscribe to receive emails.</we>
        </label>

        <label>
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            required
          />
          <we className="bi">
            I have read, understood and agree to the{" "}
            <a href="#">Privacy Policy.</a>{" "}
          </we>
        </label>
      </div>
      <div className="lastbuttons">
        <button id="google">
          <img src="/google.png" alt="Google Icon" className="logos" />
          Continue with Google
        </button>
        <button id="apple">
          <img src="/apple.png" alt="Apple Icon" className="logos" />
          Continue with Apple
        </button>
      </div>
      <button className="continue" type="submit">
        Continue
      </button>
    </form>
  );
}

export default Log;
