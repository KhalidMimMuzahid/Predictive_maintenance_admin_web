import { Typography } from "@mui/material";
import React from "react";

const TotalServiceComponent = ({ props }) => {
  return (
    <Typography sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}>
      {props?.total_service}
    </Typography>
  );
};

export default TotalServiceComponent;
