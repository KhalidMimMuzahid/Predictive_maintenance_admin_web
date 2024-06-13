import { Box, Typography } from "@mui/material";
import React from "react";

const DateComponent = ({ props }) => {
  return (
    <Box>
      <Typography>{props?.date?.date}</Typography>
      <Typography>{props?.date?.time}</Typography>
    </Box>
  );
};

export default DateComponent;
