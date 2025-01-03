import React from "react";
import useSearch from "../../hooks/UseSearch";

const SearchBar = () => {
  const {
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
  } = useSearch();

  return (
    <li className="nav-item mx-auto" style={{ flex: 1, position: "relative" }}>
      <form className="d-flex w-75 mx-auto position-relative">
        <input
          ref={searchInputRef}
          className="form-control"
          type="text"
          placeholder="Search Product..."
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: "50px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        />
        {!searchQuery && (
          <button
            type="button"
            className="btn btn-link position-absolute"
            style={{
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              padding: 0,
            }}
          >
            <i className="bi bi-search"></i>
          </button>
        )}
        {searchQuery && (
          <button
            type="button"
            className="btn btn-link position-absolute"
            onClick={() => setSearchQuery("")}
            style={{
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              padding: 0,
            }}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        )}
      </form>

      {isSearchFocused &&
        (filteredProducts.length > 0 || recentSearches.length > 0) && (
          <ul
            ref={suggestionsRef}
            className="dropdown-menu show"
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "75%",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {recentSearches.length > 0 && (
              <>
                <li className="dropdown-header d-flex justify-content-between">
                  <span>Your Recent Searches</span>
                  <button
                    className="btn btn-link btn-sm"
                    onClick={() => setRecentSearches([])}
                    style={{ padding: 0 }}
                  >
                    Clear All
                  </button>
                </li>
                {recentSearches.map((query, index) => (
                  <li
                    key={index}
                    className="dropdown-item d-flex justify-content-between"
                  >
                    <span onClick={() => handleProductSelect(query)}>
                      {query}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRecentSearchDelete(query)}
                      style={{
                        padding: 0,
                        border: "none",
                        background: "none",
                      }}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </li>
                ))}
              </>
            )}

            {filteredProducts.length > 0 && (
              <>
                <li className="dropdown-header">Search Results</li>
                {filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    className="dropdown-item"
                    onClick={() => handleProductSelect(product.id)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                    <span>{product.title}</span>
                  </li>
                ))}
              </>
            )}
          </ul>
        )}
    </li>
  );
};

export default SearchBar;
