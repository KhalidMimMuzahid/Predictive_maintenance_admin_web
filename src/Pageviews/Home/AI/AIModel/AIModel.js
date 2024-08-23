import React, { useState } from "react";
import SpeedometerProgress from "../component/SpeedometerProgress";
import { Box, Typography } from "@mui/material";

const AIModel = () => {
  const [progressValue, setProgressValue] = useState(62);
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
        AI Model
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SpeedometerProgress progressValue={progressValue} />
        <Typography
          sx={{
            marginTop: "24px",
            fontSize: "24px",
            fontWeight: "500",
            color: "black",
          }}
        >
          {progressValue <= 35
            ? "Bad"
            : progressValue > 35 && progressValue <= 65
            ? "Moderate"
            : progressValue > 65 && progressValue <= 100
            ? "Good"
            : "Out of Range"}{" "}
          {progressValue}%
        </Typography>
      </Box>
    </Box>
  );
};

export default AIModel;
