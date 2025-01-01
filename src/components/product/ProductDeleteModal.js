import React from "react";
import "../../styles/ProductDeleteModal.css";

const ProductDeleteModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0 rounded-4">
          <div className="modal-header border-0">
            <h5 className="modal-title text-center w-100">Delete Product</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
              style={{ color: "#6c757d", fontSize: "1.2rem" }}
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-center" style={{ fontSize: "1rem" }}>
              Are you sure you want to delete this product from your cart?
            </p>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onCancel}
              style={{
                borderRadius: "30px",
                padding: "8px 20px",
                fontSize: "1rem",
                borderColor: "#6c757d",
                color: "#6c757d",
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
              style={{
                borderRadius: "30px",
                padding: "8px 20px",
                fontSize: "1rem",
              }}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
