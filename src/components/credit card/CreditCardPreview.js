import React from "react";

function CreditCardPreview({ cardholderName, cardNumber, expiryDate, cvv }) {
  return (
    <div
      className="card p-3 border-0 shadow"
      style={{ maxWidth: "350px", borderRadius: "10px" }}
    >
      <div className="card-body">
        <div className="text-center">
          <div
            className="card"
            style={{
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "#2c3e50",
              color: "#fff",
              padding: "20px",
              fontSize: "16px",
            }}
          >
            <div className="d-flex justify-content-between">
              <div>
                <span>VISA</span>
              </div>
              <div>
                <span
                  className="badge bg-light text-dark"
                  style={{ padding: "5px 10px", borderRadius: "20px" }}
                >
                  Debit
                </span>
              </div>
            </div>
            <div
              className="mt-4"
              style={{ fontSize: "24px", letterSpacing: "1px" }}
            >
              <div>{cardNumber || "#### #### #### ####"}</div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <span>Expires</span>
                <div>{expiryDate || "MM/YY"}</div>
              </div>
              <div>
                <span>CVV</span>
                <div>{cvv || "***"}</div>
              </div>
            </div>
            <div className="mt-4" style={{ fontSize: "18px" }}>
              <div>{cardholderName || "Cardholder Name"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCardPreview;
