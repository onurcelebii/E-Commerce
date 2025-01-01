import React from "react";
import { Link } from "react-router-dom";
import "../../styles/CartSummary.css"

function CartSummary({ total, handleClearCart }) {
  return (
    <div className="cart-summary mt-4 p-4 border rounded-3 shadow-sm">
      <h4 className="text-center mb-3">
        Total: <span className="text-success">{total} €</span>
      </h4>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-danger w-45"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <Link to="/payment" className="btn btn-success w-45" state={{ total }}>
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
}

export default CartSummary;
