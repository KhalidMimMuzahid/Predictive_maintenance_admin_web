import { Typography } from "@mui/material";
import React from "react";

const InvoiceComponent = ({ props }) => {
  return (
    <div>
      <Typography sx={{ fontSize: "12px" }}>
        {props?.row?.invoice ? props?.row?.invoice : "No Invoice"}
      </Typography>
    </div>
  );
};

export default InvoiceComponent;
