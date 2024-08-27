import React from "react";
import SalesReports from "./SalesReports";
import Earnings from "./Earnings/Earnings";
import { Box } from "@mui/material";
import RecentOrders from "./RecentOrders/RecentOrders";

const LeftSideMain = () => {
  return (
    <Box sx={{ width: "75%" }}>
      <Box
        sx={{
          display: "flex",
          gap: "36px",
          width: "100%",
        }}
      >
        <SalesReports />
        <Earnings />
      </Box>
      <RecentOrders />
    </Box>
  );
};

export default LeftSideMain;
