import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { formatCategoryName, decodeCategoryName } from "../utils/Utils";
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
          : "Category Not Found"}
      </h2>
      {loading ? (
        <Loading />
      ) : filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="col-md-4">
              <Link
                to={`/product/${product.id}`}
                className="card-link"
                style={{
                  textDecoration: "none", 
                }}
              >
                <div
                  className="card home-card"
                  style={{ "--animation-index": index }}
                >
                  <img
                    src={product.image}
                    className="card-img-top home-image"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>

                    <div className="rating-container">
                      <StarsRating rating={product.rating.rate} />
                      <span>({product.rating.count})</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="card-price">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="btn-view-product">
                      <span className="arrow-icon">&#8594;</span>
                    </div>
                  </div>
                </div>
              </Link>
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
