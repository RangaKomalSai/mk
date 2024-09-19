import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <section className="explore">
      <h2>Explore a selection of the special movement</h2>
      <div className="explore-grid">
        <Link to="/products/rings">
          <div className="explore-item">
            <img src="images/Ring.jpg" alt="Rings" />
            <p>Rings</p>
          </div>
        </Link>
        <Link to="/products/necklaces">
          <div className="explore-item">
            <img src="images/Neckless.jpg" alt="Necklace" />
            <p>Necklace</p>
          </div>
        </Link>
        <Link to="/products/earrings">
          <div className="explore-item">
            <img src="images/Earring.jpg" alt="Earrings" />
            <p>Earrings</p>
          </div>
        </Link>
        <Link to="/products/bracelets">
          <div className="explore-item">
            <img src="images/Bracelet.jpg" alt="Diamond Bracelet" />
            <p>Diamond Bracelet</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Explore;
