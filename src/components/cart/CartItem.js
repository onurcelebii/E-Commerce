import React from "react";
import PropTypes from "prop-types";
import "../../styles/CartItem.css"; // CSS dosyasını import ettik

function CartItem({ item, increaseQuantity, decreaseQuantity, handleDelete }) {
  return (
    <div className="cart-item-container">
      <div className="cart-item-image me-3">
        <img src={item.image} alt={item.title} className="img-fluid" />
      </div>

      <div className="d-flex justify-content-between w-100 align-items-center">
        <div className="cart-item-details">
          <h5 className="mb-1">{item.title}</h5>
          <p className="mb-0 text-muted">
            {item.quantity} x {item.price.toFixed(2)} € ={" "}
            {(item.quantity * item.price).toFixed(2)} €
          </p>
        </div>

        <div className="cart-item-actions d-flex">
          <button
            className="btn btn-warning btn-md me-3"
            onClick={() => decreaseQuantity(item.id)}
            aria-label="Decrease Quantity"
          >
            -
          </button>
          <button
            className="btn btn-success btn-md me-3"
            onClick={() => increaseQuantity(item.id)}
            aria-label="Increase Quantity"
          >
            +
          </button>
          <button
            className="btn btn-danger btn-md"
            onClick={() => handleDelete(item)}
            aria-label="Delete Item"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CartItem;
