import { Typography } from "@mui/material";
import React from "react";

const TotalAmountComponent = ({ props }) => {
  return (
    <Typography
      variant="p"
      sx={{
        fontSize: "14px",
        fontWeight: "600",
      }}
    >
      ¥{props?.total_amount}
    </Typography>
  );
};

export default TotalAmountComponent;
