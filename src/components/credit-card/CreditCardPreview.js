import React from "react";

function CreditCardPreview({ cardholderName, cardNumber, expiryDate, cvv }) {
  return (
    <div
      className="card p-3 border-0 shadow"
      style={{
        maxWidth: "600px",
        width: "100%",
        borderRadius: "15px",
        backgroundColor: "#1a2a3a",
        color: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="card-body">
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "250px" }}
        >
          <div className="d-flex justify-content-between">
            <div>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>VISA</span>
            </div>
            <div>
              <span
                className="badge bg-warning text-dark"
                style={{
                  fontSize: "12px",
                  padding: "5px 15px",
                  borderRadius: "25px",
                }}
              >
                Debit
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: "30px",
              letterSpacing: "2px",
              marginTop: "20px",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            <div>{cardNumber || "#### #### #### ####"}</div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <div>
              <span style={{ fontSize: "12px" }}>Expires</span>
              <div style={{ fontSize: "16px" }}>{expiryDate || "MM/YY"}</div>
            </div>
            <div>
              <span style={{ fontSize: "12px" }}>CVV</span>
              <div style={{ fontSize: "16px" }}>{cvv || "***"}</div>
            </div>
          </div>

          <div
            style={{
              fontSize: "16px",
              marginTop: "15px",
              fontWeight: "normal",
            }}
          >
            {cardholderName || "Cardholder Name"}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            // opacity: 0.2,
          }}
        >
          <img
            src="https://www.provendata.com/wp-content/uploads/2023/09/What-is-EMV-credit-card-technology.png"
            alt="chip"
            style={{ width: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreditCardPreview;
