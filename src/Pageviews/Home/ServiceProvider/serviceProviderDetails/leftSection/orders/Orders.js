import { Box, Typography } from "@mui/material";
import React from "react";

// display: grid;
// grid-template-columns: repeat(2, 1fr); /* Two columns with equal width */
// gap: 10px; /* Gap between columns */

const Orders = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "8px",
      }}
    >
      <Box sx={{ background: "#F1F4FB" }}>
        <Typography>Total Orders</Typography>
      </Box>
      <Box sx={{ background: "#F1F4FB" }}>
        <Typography>Complete Orders</Typography>
      </Box>
      <Box sx={{ background: "#F1F4FB" }}>
        <Typography>Cancellation</Typography>
      </Box>
      <Box sx={{ background: "#F1F4FB" }}>
        <Typography>Revenue</Typography>
      </Box>
    </Box>
  );
};

export default Orders;
