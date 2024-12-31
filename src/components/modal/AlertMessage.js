import React, { useEffect, useState } from "react";

const AlertMessage = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <div
        className="toast-container position-fixed top-0 end-0 p-3"
        style={{ zIndex: 1050 }}
      >
        <div className="toast show bg-success" style={{ minWidth: "200px" }}>
          <div className="toast-body text-center text-white">{message}</div>
        </div>
      </div>
    )
  );
};

export default AlertMessage;
