import React from "react";
import "./ArcOfRings.css";
import Card from "./Card";

function ArcOfRings() {
  return (
    <section className="arc-of-rings" id="arc-of-rings">
      <h4>Minimalist</h4>
      <h2>Arc of Rings</h2>
      <a href="#" className="shop-new-arrivals">
        Shop new arrivals
      </a>
      <div className="arcOfRingsphoto"></div>
      
      <div className="arc-grid">
        {/* <div className="arc-item">
          <img src="images/silverring.jpg" alt="Silver Rouge Ring" />
          <p>Silver Rouge Ring</p>
        </div> */}
        {/* <div className="arc-item">
          <img src="images/gold-ridge-ring.jpg" alt="Gold Ridge Ring" />
          <p>Gold Ridge Ring</p>
        </div>
        <div className="arc-item">
          <img src="images/gold-stone-ring.jpg" alt="Gold Stone Ring" />
          <p>Gold Stone Ring</p>
        </div> */}
      </div>
    </section>
  );
}

export default ArcOfRings;
