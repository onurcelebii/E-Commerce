import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartIcon = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <li className="nav-item ms-auto">
      <Link
        className="nav-link d-flex align-items-center"
        to="/cart"
        style={{ fontWeight: "bold", gap: "5px" }}
      >
        <i className="bi bi-cart-fill"></i> Cart
        <span
          className={`badge bg-primary ms-2 ${
            totalItems > 0 ? "visible" : "invisible"
          }`}
          style={{
            minWidth: "25px", // Sabit genişlik
            height: "25px", // Sabit yükseklik
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {totalItems > 0 ? totalItems : ""}
        </span>
      </Link>
    </li>
  );
};

export default CartIcon;
