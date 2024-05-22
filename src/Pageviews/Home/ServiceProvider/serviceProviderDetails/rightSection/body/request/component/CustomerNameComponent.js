import { Box, Typography } from "@mui/material";
import React from "react";

const CustomerNameComponent = ({ props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0 16px",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
        >
          {props?.customerDetails?.name}
        </Typography>
        <Typography variant="p" sx={{ fontSize: "12px", color: "#6E6893" }}>
          {props?.customerDetails?.phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerNameComponent;
