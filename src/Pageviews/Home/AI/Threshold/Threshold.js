import { Box, Typography } from "@mui/material";
import React from "react";
import ThresholdTable from "./ThresholdTable/ThresholdTable";

const Threshold = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        padding: "20px",
        borderRadius: "8px",
        width: "50%",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "black" }}>
        Threshold
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThresholdTable />
      </Box>
    </Box>
  );
};

export default Threshold;
