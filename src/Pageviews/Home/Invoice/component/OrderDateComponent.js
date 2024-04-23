import { Typography } from "@mui/material";
import React from "react";

const OrderDateComponent = ({ props }) => {
  return (
    <Typography sx={{ color: "#25213B", fontWeight: "400" }}>
      {props?.order_date}
    </Typography>
  );
};

export default OrderDateComponent;
