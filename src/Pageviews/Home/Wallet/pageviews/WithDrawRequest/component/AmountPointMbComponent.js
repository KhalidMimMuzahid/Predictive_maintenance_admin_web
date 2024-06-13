import { Box, Typography } from "@mui/material";
import React from "react";

const AmountPointMbComponent = ({ props }) => {
  return (
    <Box>
      <Typography>¥{props?.amount_point_mb}</Typography>
    </Box>
  );
};

export default AmountPointMbComponent;
