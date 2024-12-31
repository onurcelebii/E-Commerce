import { useState, useEffect } from "react";

const useProducts = (productId = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = "https://fakestoreapi.com/products";

      if (productId) {
        url = `https://fakestoreapi.com/products/${productId}`;
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
  }, [productId]);

  return { products, loading };
};

export default useProducts;
