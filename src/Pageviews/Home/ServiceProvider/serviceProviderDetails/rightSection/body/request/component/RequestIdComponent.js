import { Typography } from "@mui/material";
import React from "react";

const RequestIdComponent = ({ props }) => {
  return (
    <Typography sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}>
      {props?.requestID}
    </Typography>
  );
};

export default RequestIdComponent;
