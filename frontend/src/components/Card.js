import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import love from '../assets/whislist.png';

function Card({ product }) {
  return (
    <div className="arc-grid">
      <div className="arc-item">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.imageUrl} // Use product's image from backend
            alt={product.name} // Dynamic alt text based on product name
            className="inner-image"
          />
          <p>{product.name}</p> {/* Product name */}
          <p>{`$ ${product.price}`}</p> {/* Product price */}
        </Link>
        <div className="button">
          <img
            src={love}
            alt="Wishlist Icon"
            className="w"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
