import { Box, Typography } from "@mui/material";
import React from "react";

const MonthComponent = ({ props }) => {
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
          {props?.month}
        </Typography>
      </Box>
    </Box>
  );
};

export default MonthComponent;
