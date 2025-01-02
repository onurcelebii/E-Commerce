import React from "react";
import "../../styles/SortDropdown.css";

const SortDropdown = ({ value, onChange }) => (
  <div className="sort-dropdown mb-3">
    <select
      className="form-select"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      <option value="priceAsc">Price Increasing</option>
      <option value="priceDesc">Price decreasing</option>
      <option value="ratingAsc">Star Ascending</option>
      <option value="ratingDesc">Star Descending</option>
    </select>
  </div>
);
export default SortDropdown;
