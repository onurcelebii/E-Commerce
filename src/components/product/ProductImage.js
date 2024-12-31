import React from "react";

const ProductImage = ({ image, alt }) => (
  <div className="col-md-6">
    <div className="product-image-container">
      <img src={image} alt={alt} className="img-fluid" />
    </div>
  </div>
);

export default ProductImage;
