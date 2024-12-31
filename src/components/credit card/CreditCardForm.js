import React from "react";

function CreditCardForm({
  cardholderName,
  cardNumber,
  expiryDate,
  cvv,
  handleCardholderNameChange,
  handleCardNumberChange,
  handleExpiryDateChange,
  handleCvvChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="cardholderName" className="form-label">
          Cardholder Name
        </label>
        <input
          type="text"
          className="form-control"
          id="cardholderName"
          value={cardholderName}
          onChange={handleCardholderNameChange}
          placeholder="Enter cardholder name"
          required
          maxLength="50"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">
          Card Number
        </label>
        <input
          type="text"
          className="form-control"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="1234 5678 9876 5432"
          maxLength="19"
          required
        />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="expiryDate" className="form-label">
            Expiry Date (MM/YY)
          </label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            placeholder="123"
            maxLength="3"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Pay Now
      </button>
    </form>
  );
}

export default CreditCardForm;
