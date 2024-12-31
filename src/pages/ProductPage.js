// pages/ProductPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { useCart } from "../context/CartContext";
import Loading from "../utils/Loading";
import ProductImage from "../components/product/ProductImage";
import ProductDetails from "../components/product/ProductDetails";
import "../styles/ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const { products, loading } = useProducts(id); // Yalnızca seçilen ürünü alıyoruz
  const { addToCart, showAlert } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!loading && products) {
      setProduct(products[0]); // Tek bir ürün geliyor, dizi olarak alındığı için ilk elemanı alıyoruz
    }
  }, [products, loading]);

  if (loading || !product) {
    return <Loading />; // Yükleniyor durumu
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <ProductImage image={product.image} alt={product.title} />
          <ProductDetails
            title={product.title}
            rating={product.rating}
            description={product.description}
            price={product.price}
            onAddToCart={() => addToCart(product)}
            showAlert={showAlert}
          />
        </div>
      </div>
      {/* 
      {showAlert && (
        <AlertMessage message="Product added to cart successfully!" />
      )} */}
    </div>
  );
}

export default ProductPage;
