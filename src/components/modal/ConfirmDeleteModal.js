import React from "react";
import "../styles/ConfirmDeleteModal.css";

const ConfirmDeleteModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm Deletion</h5>
          <button className="close-btn" onClick={onCancel}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete this item?</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-cancel" onClick={onCancel}>
            No, Keep It
          </button>
          <button className="btn btn-delete" onClick={onConfirm}>
            Yes, Delete It
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
