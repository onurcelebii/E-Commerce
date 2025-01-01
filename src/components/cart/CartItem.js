import React from "react";

function CartItem({ item, increaseQuantity, decreaseQuantity, handleDelete }) {
  return (
    <div className="list-group-item d-flex align-items-center">
      <div className="me-3">
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      <div className="d-flex justify-content-between w-100">
        <div>
          <h5>{item.title}</h5>
          <p>
            {item.quantity} x {item.price} € = {item.quantity * item.price} €
          </p>
        </div>
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <button
            className="btn btn-success me-2"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(item)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
