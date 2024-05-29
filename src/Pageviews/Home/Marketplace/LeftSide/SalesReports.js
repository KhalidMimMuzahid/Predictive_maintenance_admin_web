import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const SalesReports = () => {
  return (
    <Box>
      <Typography
        sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
      >
        Sales Reports
      </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 16, 20, 22, 25] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 3, 5, 8, 11, 9],
          },
        ]}
        height={300}
        width={850}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </Box>
  );
};

export default SalesReports;
