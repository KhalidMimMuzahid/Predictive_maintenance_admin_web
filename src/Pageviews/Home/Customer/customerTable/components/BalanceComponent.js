import { Box, Typography } from "@mui/material";
import React from "react";

const BalanceComponent = ({ props }) => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", gap: "8px", justifyContent: "space-between" }}
      >
        <Typography sx={{ color: "#111827", fontWeight: "600" }}>
          Showa Balance:
        </Typography>
        <Typography sx={{ color: "#6B7280", fontWeight: "400" }}>
          {props?.row?.wallet?.balance}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", gap: "8px", justifyContent: "space-between" }}
      >
        <Typography sx={{ color: "#111827", fontWeight: "600" }}>
          Showa Points:
        </Typography>
        <Typography sx={{ color: "#6B7280", fontWeight: "400" }}>
          {props?.row?.wallet?.point}
        </Typography>
      </Box>
    </Box>
  );
};

export default BalanceComponent;
