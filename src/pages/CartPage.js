import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Sepet ikonu
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import CartModals from "../components/cart/CartModals";
import "../styles/CartPage.css"; // CSS dosyasını import ettik

function CartPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const [productToDelete, setProductToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClearCartModal, setShowClearCartModal] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const confirmDeleteProduct = () => {
    removeFromCart(productToDelete.id);
    setShowDeleteModal(false);
  };

  const handleClearCart = () => setShowClearCartModal(true);

  if (cart.length === 0) {
    return (
      <div className="container cart-empty-container">
        <div className="cart-empty-message">
          <FaShoppingCart size={50} className="text-muted" />
          <h2>There is no product in your cart.</h2>
        </div>
        <Link to="/" className="btn btn-primary cart-empty-button">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <div className="list-group">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            handleDelete={handleDeleteProduct}
          />
        ))}
      </div>
      <CartSummary total={total} handleClearCart={handleClearCart} />
      <CartModals
        showDeleteModal={showDeleteModal}
        showClearCartModal={showClearCartModal}
        confirmDeleteProduct={confirmDeleteProduct}
        cancelDelete={() => setShowDeleteModal(false)}
        confirmClearCart={() => {
          clearCart();
          setShowClearCartModal(false);
        }}
        cancelClearCart={() => setShowClearCartModal(false)}
      />
    </div>
  );
}

export default CartPage;
