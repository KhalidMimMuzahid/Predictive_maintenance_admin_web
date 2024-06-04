import { Box, Typography } from "@mui/material";
import React from "react";

const GroupNameComponent = ({ props }) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "600" }}>{props?.groupName}</Typography>
    </Box>
  );
};

export default GroupNameComponent;
