import { Typography } from "@mui/material";
import React from "react";

const OrderNumberComponent = ({ props }) => {
  return (
    <Typography sx={{ color: "#25213B", fontWeight: "400" }}>
      {props?.order_number}
    </Typography>
  );
};

export default OrderNumberComponent;
