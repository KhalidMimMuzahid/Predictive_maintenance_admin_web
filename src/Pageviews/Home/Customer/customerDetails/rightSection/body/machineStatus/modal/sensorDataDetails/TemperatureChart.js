import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const TemperatureChart = ({ tempArray }) => {
  //   console.log(tempArray);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "#111827",
          fontSize: "14px",
          fontWeight: "600",
          width: "40%",
          textAlign: "start",
          padding: "10px 32px 0 32px",
        }}
      >
        Temperature Chart
      </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 18, 22, 26, 30] }]}
        series={[
          {
            data: tempArray,
          },
        ]}
        width={500}
        height={200}
      />
    </Box>
  );
};

export default TemperatureChart;
