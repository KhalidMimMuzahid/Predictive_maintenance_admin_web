import React from "react";
import SalesReports from "./SalesReports";
import Earnings from "./Earnings";
import { Box } from "@mui/material";
import RecentOrders from "./RecentOrders";

const LeftSideMain = () => {
  return (
    <Box sx={{ width: "75%" }}>
      <Box sx={{ display: "flex", gap: "36px", width: "100%" }}>
        <SalesReports />
        <Earnings />
      </Box>
      <Box>
        <RecentOrders />
      </Box>
    </Box>
  );
};

export default LeftSideMain;
