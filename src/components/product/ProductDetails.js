import React from "react";
import StarsRating from "./StarsRating";
import "../../styles/ProductDetails.css";

const ProductDetails = ({ title, rating, description, price, onAddToCart }) => {
  return (
    <div className="col-md-6 product-details">
      <h1 className="product-title">{title}</h1>
      <div className="rating-container">
        <StarsRating rating={rating.rate} />
        <span className="rating-text">({rating.count} Reviews)</span>
      </div>
      <p className="product-description">{description}</p>
      <div className="price-add-container">
        <span className="product-price">{price} €</span>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          <i className="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
