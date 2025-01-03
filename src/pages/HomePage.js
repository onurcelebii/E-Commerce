import React from "react";
import { useCart } from "../context/CartContext";
import SortDropdown from "../components/product/SortDropdown";
import useProducts from "../hooks/UseProducts";
import useSort from "../hooks/UseSort";
import Loading from "../utils/Loading";
import ProductList from "../components/product/ProductList";
import "../styles/HomePage.css";

const HomePage = () => {
  const { products, loading } = useProducts();
  const { sortOption, setSortOption, sortProducts } = useSort();
  const { addToCart } = useCart(); // `addToCart` fonksiyonunu useCart'dan alıyoruz

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <div className="welcome-section">
          <h1>Welcome!</h1>
          <p>Welcome to the e-commerce site. Check out our products.</p>
        </div>

        {/* Sıralama Dropdown */}
        <SortDropdown value={sortOption} onChange={setSortOption} />

        {loading ? (
          <Loading />
        ) : (
          <ProductList
            products={sortProducts(products)}
            onAddToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
