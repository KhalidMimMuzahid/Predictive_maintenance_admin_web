import { Box, Typography } from "@mui/material";
import React from "react";

const GroupNameComponent = ({ props }) => {
  console.log(props);
  return (
    <Box>
      <Typography>{props?.groupName}</Typography>
    </Box>
  );
};

export default GroupNameComponent;
