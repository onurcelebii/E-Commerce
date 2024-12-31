import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { formatCategoryName, decodeCategoryName } from "../utils/utils";
import StarsRating from "../components/product/StarsRating";
import Loading from "../utils/Loading";

function CategoryPage() {
  const { category } = useParams();
  const { products, loading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category && !loading) {
      const decodedCategory = decodeCategoryName(category).toLowerCase();
      if (decodedCategory === "all categories") {
        setFilteredProducts(products);
      } else {
        const categoryProducts = products.filter(
          (product) => product.category.toLowerCase() === decodedCategory
        );
        setFilteredProducts(categoryProducts);
      }
    }
  }, [category, products, loading]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">
        {category
          ? formatCategoryName(decodeCategoryName(category))
          : "Category Not Found"}{" "}
        {/* Categories */}
      </h2>
      {loading ? (
        <Loading />
      ) : filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card home-card">
                <img
                  src={product.image}
                  className="card-img-top home-image"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="ms-2">{product.rating.rate}</span>
                      <StarsRating rating={product.rating.rate} />
                      <span className="ms-2">({product.rating.count})</span>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-primary mt-2"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">There are no products in this category.</p>
      )}
    </div>
  );
}

export default CategoryPage;
