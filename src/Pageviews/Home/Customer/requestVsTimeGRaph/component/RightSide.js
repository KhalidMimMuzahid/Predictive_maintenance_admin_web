/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { Box, Typography } from "@mui/material";
import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class RightSide extends Component {
  render() {
    const options = {
      animationEnabled: true,
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###",
          dataPoints: [
            { name: "Schedule", y: 644 },
            { name: "Inactive", y: 311 },
            { name: "Active", y: 809 },
          ],
        },
      ],
    };
    return (
      <Box
        sx={{
          width: "30%",
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
              Customer Status
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
        <Box>
          <CanvasJSChart options={options} />
        </Box>
      </Box>
    );
  }
}
export default RightSide;
