import { Typography } from "@mui/material";
import React from "react";

const InvoicedAmount = ({ props }) => {
  console.log(props);
  return (
    <Typography sx={{ color: "#25213B", fontWeight: "400" }}>
      ¥{props?.additionalProducts?.totalAmount}
    </Typography>
  );
};

export default InvoicedAmount;
