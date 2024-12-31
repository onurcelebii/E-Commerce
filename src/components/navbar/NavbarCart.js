import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function NavbarCart() {
  const { cart } = useCart(); // Sepet verisini alıyoruz

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <li className="nav-item ms-auto">
      <Link
        className="nav-link d-flex align-items-center"
        to="/cart"
        style={{ fontWeight: "bold", gap: "5px" }}
      >
        <i className="bi bi-cart-fill"></i> Cart
        {totalItems > 0 && (
          <span className="badge bg-primary ms-2">{totalItems}</span>
        )}
      </Link>
    </li>
  );
}

export default NavbarCart;
