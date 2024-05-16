import { Box, Typography } from "@mui/material";
import React from "react";

const GroupIdComponent = ({ props }) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "600" }}>{props?.groupId}</Typography>
    </Box>
  );
};

export default GroupIdComponent;
