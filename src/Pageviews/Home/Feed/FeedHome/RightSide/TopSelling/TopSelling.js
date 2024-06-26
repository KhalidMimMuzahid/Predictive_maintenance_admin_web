import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TopSelling = () => {
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
          Top Selling
        </Typography>
        <Button
          sx={{
            textTransform: "none",
          }}
        >
          See More
        </Button>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default TopSelling;
