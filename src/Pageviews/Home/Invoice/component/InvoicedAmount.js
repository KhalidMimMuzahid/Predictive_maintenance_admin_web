import { Typography } from "@mui/material";
import React from "react";

const InvoicedAmount = ({ props }) => {
  return (
    <Typography sx={{ color: "#25213B", fontWeight: "400" }}>
      ¥{props?.invoiced_amount}
    </Typography>
  );
};

export default InvoicedAmount;
