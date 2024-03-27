/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { Box, Typography } from "@mui/material";
import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LeftSide extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }

  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  render() {
    const options = {
      theme: "light5",
      animationEnabled: true,
      axisY: {
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD",
      },
      axisY2: {
        titleFontColor: "#51CDA0",
        lineColor: "#51CDA0",
        labelFontColor: "#51CDA0",
        tickColor: "#51CDA0",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "spline",
          name: "",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#,##0 Units",
          dataPoints: [
            { x: new Date(2024, 0, 1), y: 5400 },
            { x: new Date(2024, 1, 1), y: 2600 },
            { x: new Date(2024, 2, 1), y: 0 },
            { x: new Date(2024, 3, 1), y: 2400 },
            { x: new Date(2024, 4, 1), y: 5000 },
            { x: new Date(2024, 5, 1), y: 9000 },
            { x: new Date(2024, 6, 1), y: 6000 },
            { x: new Date(2024, 7, 1), y: 5000 },
            { x: new Date(2024, 8, 1), y: 7200 },
            { x: new Date(2024, 9, 1), y: 7100 },
            { x: new Date(2024, 10, 1), y: 5000 },
            { x: new Date(2024, 11, 1), y: 1000 },
          ],
        },
        {
          type: "spline",
          name: "",
          axisYType: "primary",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#,##0 Units",
          dataPoints: [
            { x: new Date(2024, 0, 1), y: 1500 },
            { x: new Date(2024, 1, 1), y: 6800 },
            { x: new Date(2024, 2, 1), y: 7000 },
            { x: new Date(2024, 3, 1), y: 5000 },
            { x: new Date(2024, 4, 1), y: 2000 },
            { x: new Date(2024, 5, 1), y: 5000 },
            { x: new Date(2024, 6, 1), y: 2000 },
            { x: new Date(2024, 7, 1), y: 4400 },
            { x: new Date(2024, 8, 1), y: 4500 },
            { x: new Date(2024, 9, 1), y: 2600 },
            { x: new Date(2024, 10, 1), y: 3000 },
            { x: new Date(2024, 11, 1), y: 3000 },
          ],
        },
      ],
    };

    return (
      <Box
        sx={{
          width: "70%",
          padding: "24px 0",
          borderRadius: "4px",
          background: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px 25px 20px",
            borderRadius: "6px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0 12px" }}>
            <img
              src={rectangle}
              style={{ width: "18px", height: "18px" }}
              alt=""
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#5A6872" }}
            >
              Customer Daily Requests
            </Typography>
          </Box>
          <Box>
            <select
              name=""
              id=""
              style={{
                border: "none",
                fontSize: "12px",
                fontWeight: "400",
                color: "#66737E",
              }}
            >
              <option value="">Select As</option>
            </select>
          </Box>
        </Box>
        <hr style={{ bgColor: "#E6EFF5", opacity: "25%" }} />
        <Box sx={{ padding: "24px 34px" }}>
          <CanvasJSChart
            options={options}
            onRef={(ref) => (this.chart = ref)}
          />
        </Box>
      </Box>
    );
  }
}

export default LeftSide;
