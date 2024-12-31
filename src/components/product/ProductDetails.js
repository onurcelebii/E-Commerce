import React, { useState } from "react";
import StarsRating from "./StarsRating";
import AlertMessage from "../modal/AlertMessage";

const ProductDetails = ({ title, rating, description, price, onAddToCart }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(); // Sepete ekleme işlemi
    setShowAlert(true); // Mesajı göster
  };

  return (
    <div className="col-md-6">
      <h2 className="product-title">{title}</h2>
      <div className="d-flex align-items-center mb-3">
        <span className="ms-2">{rating.rate}</span>
        <StarsRating rating={rating.rate} />
        <span className="ms-2">({rating.count})</span>
      </div>

      <p>{description}</p>

      <div className="d-flex justify-content-between align-items-center">
        <div className="product-price-container">
          <span>{price} €</span>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <i className="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>

      {showAlert && (
        <AlertMessage message="Product added to cart successfully!" />
      )}
    </div>
  );
};

export default ProductDetails;
