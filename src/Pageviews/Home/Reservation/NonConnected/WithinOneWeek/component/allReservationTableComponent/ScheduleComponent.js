import { Typography } from "@mui/material";
import React from "react";

const ScheduleComponent = ({ props }) => {
  return (
    <div>
      <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>
        {props?.row?.schedule?.category}
      </Typography>
    </div>
  );
};

export default ScheduleComponent;
