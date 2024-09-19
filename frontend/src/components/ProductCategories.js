import React from 'react';
import './ProductCategories.css';

function ProductCategories() {
  return (
    <div className="product-categories">
      <h1>Explore a selection of the special movement</h1>
      <div className="categories">
        <div className="category">
        <img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Rings</p>
        </div>
        <div className="category">
        <img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Necklace</p>
        </div>
        <div className="category">
            <img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Earrings</p></div>
        <div className="category">
        <img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Bracelets</p>
        </div>
        </div>
        <div className="categorie">
        <div className="categorye"><img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Anklets</p></div>
        <div className="categorye">
        <img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Hair Jewelery</p>
        </div>
        <div className="categorye">
        <img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Men's Jewelery</p>
        </div>
        <div className="categorye">
        <img src="ring-image.png" alt="Ring Image" className="category-image" />
        <p>Children's Jewelery</p>
        </div>
        </div>
    </div>
  );
}

export default ProductCategories;
