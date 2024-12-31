import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CreditCardForm from "../components/credit card/CreditCardForm";
import CreditCardPreview from "../components/credit card/CreditCardPreview";
import CreditCardConfirmationModal from "../components/credit card/CreditCardConfirmationModal";
import {
  handleCardholderNameChange,
  handleCardNumberChange,
  handleExpiryDateChange,
  handleCvvChange,
} from "../utils/utils";
import "../styles/PaymentPage.css";

function PaymentPage() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const location = useLocation();
  const total = location.state?.total;
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all the fields before proceeding.");
    } else {
      setShowConfirmationModal(true);
    }
  };

  const handleConfirmPayment = () => {
    setShowConfirmationModal(false);
    clearCart();
    setPaymentSuccessful(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleCancelPayment = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Payment</h2>
      <div className="row">
        <div className="col-md-6">
          <CreditCardForm
            cardholderName={cardholderName}
            cardNumber={cardNumber}
            expiryDate={expiryDate}
            cvv={cvv}
            handleCardholderNameChange={(e) =>
              handleCardholderNameChange(e, setCardholderName)
            }
            handleCardNumberChange={(e) =>
              handleCardNumberChange(e, setCardNumber)
            }
            handleExpiryDateChange={(e) =>
              handleExpiryDateChange(e, setExpiryDate)
            }
            handleCvvChange={(e) => handleCvvChange(e, setCvv)}
            handleSubmit={handleProceedToPayment}
          />
        </div>

        <div className="col-md-6">
          <CreditCardPreview
            cardholderName={cardholderName}
            cardNumber={cardNumber}
            expiryDate={expiryDate}
            cvv={cvv}
          />
        </div>
      </div>

      {showConfirmationModal && (
        <CreditCardConfirmationModal
          total={total}
          onCancel={handleCancelPayment}
          onConfirm={handleConfirmPayment}
        />
      )}

      {paymentSuccessful && (
        <div className="toast-message">
          <p>Payment successful! Redirecting to the homepage...</p>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
