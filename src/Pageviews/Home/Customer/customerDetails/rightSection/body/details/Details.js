import { Box } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Details = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ border: "1px solid black" }}>
        <Header />
      </Box>
      <Box sx={{ border: "1px solid black" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Details;
