import React from "react";

const PriceComponent = ({ props }) => {
  return (
    <div style={{ color: "#111827", fontSize: "24", fontWeight: "500" }}>
      {"\xA5 " + props?.row?.price}
    </div>
  );
};

export default PriceComponent;
