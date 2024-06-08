import { Box, Typography } from "@mui/material";
import React from "react";
import RecentOrdersTable from "./RecentOrdersTable";

const RecentOrders = () => {
  return (
    <Box>
      <Typography
        sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
      >
        Recent Orders
      </Typography>
      <RecentOrdersTable />
    </Box>
  );
};

export default RecentOrders;
