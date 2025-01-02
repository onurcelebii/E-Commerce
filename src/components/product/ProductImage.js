import React from "react";
import "../../styles/ProductImage.css";

const ProductImage = ({ image, alt }) => (
  <div className="col-md-6 product-image-container">
    <img src={image} alt={alt} className="product-image" />
  </div>
);

export default ProductImage;
