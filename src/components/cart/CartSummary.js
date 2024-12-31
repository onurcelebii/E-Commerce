import React from "react";
import { Link } from "react-router-dom";

function CartSummary({ total, handleClearCart }) {
  return (
    <div className="mt-3">
      <h4>Total: {total} ₺</h4>
      <div className="d-flex gap-3">
        <button className="btn btn-primary" onClick={handleClearCart}>
          Clear Cart
        </button>
        <Link to="/payment" className="btn btn-success" state={{ total }}>
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
}

export default CartSummary;
