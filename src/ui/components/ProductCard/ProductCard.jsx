/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "@styles/Components/ProductCard/ProductCard.css";

function ProductCard({ image, name, price, rating }) {
  return (
    <div className="productCard">
      <div className="imageContainer">
        <img src={image} alt={name} className="image" />
      </div>
      <div className="details">
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
        <p className="rating">Rating: {rating}</p>
      </div>
    </div>
  );
}

export default ProductCard;
