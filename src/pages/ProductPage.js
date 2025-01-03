import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/UseProducts";
import { useCart } from "../context/CartContext";
import Loading from "../utils/Loading";
import ProductImage from "../components/product/ProductImage";
import ProductDetails from "../components/product/ProductDetails";
import "../styles/ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const { products, loading } = useProducts(id);
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!loading && products) {
      setProduct(products[0]);
    }
  }, [products, loading]);

  if (loading || !product) {
    return <Loading />;
  }

  return (
    <div className="product-page-container">
      <div className="container">
        <div className="row align-items-center">
          <ProductImage image={product.image} alt={product.title} />
          <ProductDetails
            title={product.title}
            rating={product.rating}
            description={product.description}
            price={product.price}
            onAddToCart={() => addToCart(product)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
