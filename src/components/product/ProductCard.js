import React from "react";
import { Link } from "react-router-dom";
import StarsRating from "./StarsRating";
import "../../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div key={product.id} className="col-md-4">
      <div className="card home-card">
        <img
          src={product.image}
          className="card-img-top home-image"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span className="ms-2">{product.rating.rate}</span>
              <StarsRating rating={product.rating.rate} />{" "}
              <span className="ms-2">({product.rating.count})</span>
            </div>
            <Link
              to={`/product/${product.id}`}
              className="btn btn-outline-primary mt-2"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
