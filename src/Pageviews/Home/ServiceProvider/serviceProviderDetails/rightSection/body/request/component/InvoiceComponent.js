import { Box, Typography } from "@mui/material";
import React from "react";

const InvoiceComponent = ({ props }) => {
  return (
    <Box>
      {props?.invoice === "Create" && (
        <Typography sx={{ color: "#2196F3" }}>{props?.invoice}</Typography>
      )}
      {props?.invoice === "Send" && (
        <Typography sx={{ color: "#14B8A6" }}>{props?.invoice}</Typography>
      )}
      {props?.invoice === "Ongoing" && (
        <Typography sx={{ color: "#7FC008" }}>{props?.invoice}</Typography>
      )}
    </Box>
  );
};

export default InvoiceComponent;
