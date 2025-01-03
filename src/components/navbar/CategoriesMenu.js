import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { formatCategoryName, formatCategoryURL } from "../../utils/Utils";
import "../../styles/CategoriesMenu.css";

const CategoriesMenu = () => {
  const { products, loading } = useProducts();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!loading) {
      const categorySet = new Set(products.map((product) => product.category));
      setCategories(["All Categories", ...Array.from(categorySet)]);
    }
  }, [products, loading]);

  return (
    <div className="categories-menu">
      <div className="container">
        <ul className="d-flex">
          {categories.map((category) => (
            <li key={category} className="nav-item">
              <Link
                to={`/category/${formatCategoryURL(category)}`}
                className="nav-link"
              >
                {formatCategoryName(category)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesMenu;
