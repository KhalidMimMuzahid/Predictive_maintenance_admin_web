import { Box } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader"></div>
    </Box>
  );
};

export default Loader;
