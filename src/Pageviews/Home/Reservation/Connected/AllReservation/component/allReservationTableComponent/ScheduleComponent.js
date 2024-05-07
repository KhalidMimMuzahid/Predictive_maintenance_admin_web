import { Typography } from "@mui/material";
import React from "react";

const ScheduleComponent = ({ props }) => {
  return (
    <div>
      <Typography>{props?.row?.schedule?.category}</Typography>
    </div>
  );
};

export default ScheduleComponent;
