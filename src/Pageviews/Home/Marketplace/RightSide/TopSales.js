import { Box, Typography } from "@mui/material";
import React from "react";

const TopSales = () => {
  return (
    <Box sx={{ marginTop: "48px" }}>
      <Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
        >
          Top Sales
        </Typography>
      </Box>
    </Box>
  );
};

export default TopSales;
