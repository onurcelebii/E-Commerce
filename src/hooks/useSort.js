import { useState } from "react";

const useSort = () => {
  const [sortOption, setSortOption] = useState("priceAsc");

  const sortProducts = (products) => {
    let sortedProducts = [...products];
    if (sortOption === "priceAsc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "ratingAsc") {
      sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (sortOption === "ratingDesc") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    return sortedProducts;
  };

  return { sortOption, setSortOption, sortProducts };
};

export default useSort;
