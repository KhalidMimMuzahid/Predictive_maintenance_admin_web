import React from "react";

const InvoicedAmount = ({ totalAmount }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <span style={{ marginLeft: "24px" }}>{totalAmount || 0}</span>
    </div>
  );
};

export default InvoicedAmount;
