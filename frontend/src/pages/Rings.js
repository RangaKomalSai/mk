import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios for making API calls
import Card from "../components/Card";
import Head from "../components/Head";

function Rings() {
  const [products, setProducts] = useState([]); // State to store fetched products

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/rings"); // Update with your backend URL
        setProducts(response.data); // Set fetched products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Apply the scroll behavior and styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        html {
          scroll-behavior: smooth;
        }
      `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App">
      <Head />
      <div className="Card">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Rings;
