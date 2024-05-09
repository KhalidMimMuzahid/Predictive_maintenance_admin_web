import { Box, Typography } from "@mui/material";
import React from "react";

const GroupIdComponent = ({ props }) => {
  return (
    <Box>
      <Typography>{props?.groupId}</Typography>
    </Box>
  );
};

export default GroupIdComponent;
