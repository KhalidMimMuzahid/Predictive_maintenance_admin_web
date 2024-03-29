import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TotalIOTDevice = () => {
  return (
    <Box
      sx={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography
          sx={{ color: "#3CBB8F", fontSize: "40px", fontWeight: "700" }}
        >
          7,890
        </Typography>
        <Typography sx={{ color: "#A0AEC3" }}>Qty</Typography>
      </Box>
      <Box>
        <Typography
          sx={{ color: "#243972", fontSize: "24px", fontWeight: "600" }}
        >
          Total IOT Device
        </Typography>
        <Typography
          sx={{ color: "#243972", fontSize: "24px", fontWeight: "600" }}
        >
          (Active)
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalIOTDevice;
