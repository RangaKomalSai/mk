import React, { useEffect } from "react";
import "./Head.css";
import { Link as RouterLink } from "react-router-dom";

function Head() {
  useEffect(() => {
    const checkbox = document.querySelector("#menuToggle input");

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    const handleMenuChange = (event) => {
      if (event.target.checked) {
        disableScroll();
      } else {
        enableScroll();
      }
    };

    checkbox.addEventListener("change", handleMenuChange);

    return () => {
      checkbox.removeEventListener("change", handleMenuChange);
    };
  }, []);

  const closeMenu = () => {
    const checkbox = document.querySelector("#menuToggle input");
    checkbox.checked = false;
    document.body.style.overflow = "auto"; // Ensure scroll is enabled
  };

  return (
    <header className="header">
      <div className="menu">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <div className=""></div>
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <div className="line"></div>
              <RouterLink to="/products/rings" onClick={closeMenu}>
                <li>
                  <h4>Rings</h4>
                </li>
              </RouterLink>
              <RouterLink to="/products/necklaces" onClick={closeMenu}>
                <li>
                  <h4>Necklaces</h4>
                </li>
              </RouterLink>
              <RouterLink to="/products/earrings" onClick={closeMenu}>
                <li>
                  <h4>Earrings</h4>
                </li>
              </RouterLink>
              <RouterLink to="/products/bracelets" onClick={closeMenu}>
                <li>
                  <h4>Bracelets</h4>
                </li>
              </RouterLink>
              <a href="#" onClick={closeMenu}>
                <li>
                  <h4>Anklet</h4>
                </li>
              </a>
              <a href="#" onClick={closeMenu}>
                <li>
                  <h4>Hair Pin</h4>
                </li>
              </a>
              <a href="#" onClick={closeMenu}>
                <li>
                  <h4>Men's Jewellery</h4>
                </li>
              </a>
              <a href="#" onClick={closeMenu}>
                <li>
                  <h4>Children's Jewellery</h4>
                </li>
              </a>
              <h4>Services</h4>
              <p className="sub">Repairs</p>
              <div className=" service">
                <p>Free of cost</p>
                <p>Terms:</p>
                <p>Additional gold weight </p>
                <p>billed at current market rate</p>
              </div>
              <p className="sub">Personalisation</p>
              <div className="personalisation">
                <p> Contact Us on:</p>
                <p>+91 8962675833</p>
              </div>

              <p className="sub">Art of Gifting</p>

              <div className="personalisation">
                <p> Contact Us on:</p>
                <p>+91 8962675833</p>
              </div>
              <h4>Connect</h4>
              <p className="service">Can we help you?</p>

              <p className="service">+91 8963675833</p>
            </ul>
          </div>
        </nav>
        <div className="menu-text">Menu</div>
      </div>
      <button className="searchicon">
        <img src="images/searchicon.jpg" alt="search" />
        <input className="search" type="text" placeholder="Search" />
      </button>
      <div className="logo">HARMAIG</div>
      <a className="sign-in">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Sign up</RouterLink>{" "}
      </a>
    </header>
  );
}

export default Head;
