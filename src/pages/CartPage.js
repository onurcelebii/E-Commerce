import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import CartModals from "../components/cart/CartModals";

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
      <div className="container mt-5">
        <h2>Your Cart is Empty</h2>
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
