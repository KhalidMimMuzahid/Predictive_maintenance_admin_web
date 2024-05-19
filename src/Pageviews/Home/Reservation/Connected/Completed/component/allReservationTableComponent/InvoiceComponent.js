import { Typography } from "@mui/material";
import React from "react";

const InvoiceComponent = ({ props }) => {
  return (
    <div>
      <Typography
        sx={{ fontSize: "12px", color: "#F15F5F", fontWeight: "600" }}
      >
        Paid
      </Typography>
    </div>
  );
};

export default InvoiceComponent;
