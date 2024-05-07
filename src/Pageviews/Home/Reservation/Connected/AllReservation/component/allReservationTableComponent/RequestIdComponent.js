import { Typography } from "@mui/material";
import React from "react";

const RequestIdComponent = ({ props }) => {
  return (
    <div>
      <Typography>{props?.row?.requestId}</Typography>
    </div>
  );
};

export default RequestIdComponent;
