import React from "react";
import Loader from "./Loader";
import { Box, Typography } from "@mui/material";
import { Construction } from "@mui/icons-material";

const UnderConstruction = () => {
  return (
    <Box sx={{ width: "100%", height: "80vh", marginBottom: "24px" }}>
      <Loader />
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "800",
          color: "red",
        }}
      >
        This Page Is Under Construction <Construction />
      </Typography>
    </Box>
  );
};

export default UnderConstruction;
