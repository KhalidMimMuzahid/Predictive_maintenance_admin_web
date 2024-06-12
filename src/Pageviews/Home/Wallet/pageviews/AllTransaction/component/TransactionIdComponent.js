import { Box, Typography } from "@mui/material";
import React from "react";

const TransactionIdComponent = ({ props }) => {
  return (
    <Box>
      <Typography>{props?.transaction_id}</Typography>
    </Box>
  );
};

export default TransactionIdComponent;
