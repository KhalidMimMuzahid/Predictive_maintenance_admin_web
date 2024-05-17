import React from "react";

const InvoicedAmount = ({ totalAmount }) => {
  return (
    <div>
      <span>{totalAmount || 0}</span>
    </div>
  );
};

export default InvoicedAmount;
