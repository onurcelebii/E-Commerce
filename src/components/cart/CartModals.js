import React from "react";
import ProductDeleteModal from "../product/ProductDeleteModal";
import ClearCartModal from "../modal/ClearCartModal";

function CartModals({
  showDeleteModal,
  showClearCartModal,
  confirmDeleteProduct,
  cancelDelete,
  confirmClearCart,
  cancelClearCart,
}) {
  return (
    <>
      <ProductDeleteModal
        show={showDeleteModal}
        onConfirm={confirmDeleteProduct}
        onCancel={cancelDelete}
      />
      <ClearCartModal
        show={showClearCartModal}
        onConfirm={confirmClearCart}
        onCancel={cancelClearCart}
      />
    </>
  );
}

export default CartModals;
