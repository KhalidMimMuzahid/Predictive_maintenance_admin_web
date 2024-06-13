import { Box, Typography } from "@mui/material";
import React from "react";

const TransactionTypeComponent = ({ props }) => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "none",
          fontSize: "12px",
          fontWeight: "600",
          textAlign: "center",
          color:
            (props?.transaction_type === "Transfer" && "#3300FE") ||
            (props?.transaction_type === "Add Money" && "#C2630B") ||
            (props?.transaction_type === "Receive" && "#03A600"),
          background:
            (props?.transaction_type === "Transfer" && "#E4DDFF") ||
            (props?.transaction_type === "Add Money" && "#FFE5CD") ||
            (props?.transaction_type === "Receive" && "#D9FFDA"),
          padding: "2px 6px",
          width: "96px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {props?.transaction_type.charAt(0).toUpperCase() +
          props?.transaction_type.slice(1)}
      </Typography>
    </Box>
  );
};

export default TransactionTypeComponent;
