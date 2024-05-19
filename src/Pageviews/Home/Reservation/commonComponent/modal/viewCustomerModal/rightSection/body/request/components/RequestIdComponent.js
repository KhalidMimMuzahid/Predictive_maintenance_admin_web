import { Box, Typography } from "@mui/material";
import React from "react";

const RequestIdComponent = ({ requestID }) => {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{ fontSize: "14px", color: "#25213B", fontWeight: "600" }}
      >
        {requestID}
      </Typography>
    </Box>
  );
};

export default RequestIdComponent;
