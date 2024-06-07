import { Box, Typography } from "@mui/material";
import React from "react";

const CustomerComponent = ({ customer }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
        {customer?.showaUser?.name?.firstName +
          " " +
          customer?.showaUser?.name?.lastName}
      </Typography>
      <Typography sx={{ fontSize: "12px" }}>
        {customer?.phone || "No Phone Found"}
      </Typography>
    </Box>
  );
};

export default CustomerComponent;
