import React from "react";
import { useNavigate } from "react-router-dom";
import StarsRating from "./StarsRating";
import "../../styles/ProductCard.css";

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div key={product.id} className="col-md-4">
      <div
        className="card home-card"
        onClick={handleCardClick}
        style={{ "--animation-index": index }}
      >
        <img
          src={product.image}
          className="card-img-top home-image"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="rating-container">
            <StarsRating rating={product.rating.rate} />
            <span>({product.rating.count})</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-price">${product.price.toFixed(2)}</div>
          <div
            className="btn-view-product"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
          >
            <span className="arrow-icon">&#8594;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
