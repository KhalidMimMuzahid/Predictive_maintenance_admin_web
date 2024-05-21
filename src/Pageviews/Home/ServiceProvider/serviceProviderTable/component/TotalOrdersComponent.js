import { Typography } from "@mui/material";
import React from "react";

const TotalOrdersComponent = ({ props }) => {
  return (
    <Typography
      variant="p"
      sx={{
        fontSize: "12px",
        color: "#25213B",
      }}
    >
      {props?.total_orders}
    </Typography>
  );
};

export default TotalOrdersComponent;
