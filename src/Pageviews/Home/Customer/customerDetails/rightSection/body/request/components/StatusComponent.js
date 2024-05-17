import { Typography } from "@mui/material";
import React from "react";

const StatusComponent = ({ props }) => {
  return (
    <Typography
      variant="p"
      sx={{ fontSize: "14px", color: "#25213B", fontWeight: "600" }}
    >
      {props?.status}
    </Typography>
  );
};

export default StatusComponent;
