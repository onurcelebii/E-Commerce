import React from "react";
import "../../styles/ClearCartModal.css";

const ClearCartModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0 rounded-3">
          <div className="modal-header">
            <h5 className="modal-title">Clear Cart</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to clear your cart?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              style={{ borderRadius: "25px" }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
              style={{ borderRadius: "25px" }}
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
