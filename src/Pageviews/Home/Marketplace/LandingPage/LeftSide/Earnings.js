import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { color } from "framer-motion";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Earnings = () => {
  const options = {
    animationEnabled: true,
    width: 300,
    subtitles: [
      {
        text: "$12,560",
        verticalAlign: "center",
        fontSize: 26,
        fontWeight: 700,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        dataPoints: [
          { name: "Income", y: 4000, color: "#FCB800" },
          { name: "Taxes", y: 2650, color: "#FC6F02" },
          { name: "Fees", y: 1962, color: "#80BC00" },
        ],
      },
    ],
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
      >
        Earnings
      </Typography>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </Box>
  );
};

export default Earnings;
