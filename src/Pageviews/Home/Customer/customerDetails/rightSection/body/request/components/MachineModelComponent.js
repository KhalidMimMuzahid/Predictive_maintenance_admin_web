import { Typography } from "@mui/material";
import React from "react";

const MachineModelComponent = ({ props }) => {
  return (
    <Typography
      variant="p"
      sx={{ fontSize: "14px", color: "#25213B", fontWeight: "600" }}
    >
      {props?.machine?.model}
    </Typography>
  );
};

export default MachineModelComponent;
