import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "./UseProducts";

const useSearch = () => {
  const { products, loading } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
  }, []);

  useEffect(() => {
    if (!loading && products.length > 0 && searchQuery.trim() !== "") {
      const results = products
        .filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 3);
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, loading, products]);

  const handleProductSelect = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery("");
    setFilteredProducts([]);
    setIsSearchFocused(false);

    const updatedSearches = [searchQuery, ...recentSearches];
    const uniqueSearches = [...new Set(updatedSearches)];
    setRecentSearches(uniqueSearches);

    localStorage.setItem("recentSearches", JSON.stringify(uniqueSearches));
  };

  const handleRecentSearchDelete = (searchQueryToDelete) => {
    const updatedSearches = recentSearches.filter(
      (search) => search !== searchQueryToDelete
    );
    setRecentSearches(updatedSearches);

    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target)
    ) {
      setFilteredProducts([]);
      setIsSearchFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    filteredProducts,
    recentSearches,
    setRecentSearches,
    isSearchFocused,
    setIsSearchFocused,
    searchInputRef,
    suggestionsRef,
    handleProductSelect,
    handleRecentSearchDelete,
  };
};

export default useSearch;
