import { Typography } from "@mui/material";
import React from "react";

const OrderDate = ({ dateString }) => {
  const date = new Date();
  const day = date?.getDate();
  const month = date?.getMonth() + 1; // Months are zero-indexed, so add 1
  const year = date?.getFullYear();
  return (
    <Typography sx={{ color: "#25213B", fontSize: "14px", fontWeight: "400" }}>
      {`${year}-${month}-${day}`}
    </Typography>
  );
};

export default OrderDate;
