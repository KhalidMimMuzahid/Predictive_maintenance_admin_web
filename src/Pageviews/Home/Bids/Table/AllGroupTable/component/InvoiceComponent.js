import { Button, Typography } from "@mui/material";
import React from "react";

const InvoiceComponent = ({ reservation }) => {
  console.log("From Invoice", reservation);
  return (
    <div>
      {reservation?.status === "pending" ? (
        <Button
          sx={{ color: "#2196F3", fontWeight: "600", textTransform: "none" }}
        >
          Create
        </Button>
      ) : (
        "-"
      )}
    </div>
  );
};

export default InvoiceComponent;
