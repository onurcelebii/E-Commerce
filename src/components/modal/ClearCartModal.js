import React from "react";
import "../../styles/ClearCartModal.css";

const ClearCartModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0 rounded-3">
          <div className="modal-header border-0">
            <h5 className="modal-title text-center w-100">Clear Cart</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-center">
              Are you sure you want to clear your cart?
            </p>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
            >
              Yes, Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearCartModal;
