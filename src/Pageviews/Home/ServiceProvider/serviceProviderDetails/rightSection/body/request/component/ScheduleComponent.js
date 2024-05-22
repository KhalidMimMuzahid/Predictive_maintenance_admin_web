import { Box, Typography } from "@mui/material";
import React from "react";

const ScheduleComponent = ({ props }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="p"
        sx={{
          px: "16px",
          py: "4px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {props?.schedule?.time}
      </Typography>
      <Typography
        variant="p"
        sx={{
          px: "16px",
          py: "4px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {props?.schedule?.date}
      </Typography>
    </Box>
  );
};

export default ScheduleComponent;
