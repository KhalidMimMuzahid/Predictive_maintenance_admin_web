import React from "react";
import Statics from "./Statics";
import TopSales from "./TopSales";
import { Box } from "@mui/material";

const RightSideMain = () => {
  return (
    <Box sx={{ width: "25%" }}>
      <Statics />
      <TopSales />
    </Box>
  );
};

export default RightSideMain;
