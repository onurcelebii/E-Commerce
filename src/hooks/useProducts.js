// hooks/useProducts.js
import { useState, useEffect } from "react";

const useProducts = (productId = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = "https://fakestoreapi.com/products"; // Tüm ürünler için API URL'si

      if (productId) {
        url = `https://fakestoreapi.com/products/${productId}`; // Tek bir ürün için API URL'si
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(productId ? [data] : data); // Tek ürünse diziyi array içine al
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]); // productId değişirse yeniden veri al

  return { products, loading };
};

export default useProducts;
