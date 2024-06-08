import { Box, Typography } from "@mui/material";
import React from "react";

const LocationComponent = ({ props }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ color: "#111827", fontSize: "14px", fontWeight: "600" }}
        >
          {props?.address?.roomNumber}
        </Typography>
        <Typography
          sx={{ color: "#111827", fontSize: "14px", fontWeight: "600" }}
        >
          {props?.address?.buildingName}
        </Typography>
        <Typography
          sx={{ color: "#111827", fontSize: "14px", fontWeight: "600" }}
        >
          {props?.address?.prefecture}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
          color: "#6B7280",
          fontSize: "8px",
          fontWeight: "400",
        }}
      >
        <Typography>{props?.address?.city},</Typography>
        <Typography>{props?.address?.country}</Typography>
      </Box>
    </Box>
  );
};

export default LocationComponent;
