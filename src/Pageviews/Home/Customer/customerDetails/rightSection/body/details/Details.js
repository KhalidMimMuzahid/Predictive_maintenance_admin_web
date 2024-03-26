import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Details = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{}}>
        <Header />
      </Box>
      <Box sx={{ paddingX: "60px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Details;
