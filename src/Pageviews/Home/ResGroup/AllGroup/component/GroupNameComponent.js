import { Box, Typography } from "@mui/material";
import React from "react";

const GroupNameComponent = ({ props }) => {
  return (
    <Box>
      <Typography>{props?.groupName}</Typography>
    </Box>
  );
};

export default GroupNameComponent;
