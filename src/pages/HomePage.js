import React from "react";
import { useCart } from "../context/CartContext";
import SortDropdown from "../components/product/SortDropdown";
import useProducts from "../hooks/useProducts";
import useSort from "../hooks/useSort";
import Loading from "../utils/Loading";
import ProductList from "../components/product/ProductList";

const HomePage = () => {
  const { products, loading } = useProducts();
  const { sortOption, setSortOption, sortProducts } = useSort();
  const { addToCart } = useCart(); // `addToCart` fonksiyonunu useCart'dan alıyoruz

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <h1>Welcome!</h1>
        <p>Welcome to the e-commerce site. Check out our products.</p>

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
