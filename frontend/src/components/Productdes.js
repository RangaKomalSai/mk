import React, { useState, useEffect } from "react";
import "./Productdes.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
function Productdes() {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details from backend
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/byId/${productId}`); // Adjust based on your backend route
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="des">
      <img src={product.imageUrl} alt={product.name} className="productimg"></img>
      <div className="add">
        <h1>{product.name}</h1>
        {/* <p>SK11</p> */}
        <p>{`Price: $${product.price}`}</p>
        <p>{product.description}</p>
        <div className="carat">
          <button>14k</button>
          <button>18k</button>
          <button>20k</button>
          <button>22k</button>
          <button>23k</button>
          <button>24k</button>
        </div>
        <div className="w">
          <button>To Cart</button>
          <button>
            <Link to="/Buyp">Purchase</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdes;
