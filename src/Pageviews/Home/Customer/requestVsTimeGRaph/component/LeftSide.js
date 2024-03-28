/* App.js */
import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LeftSide extends Component {
  constructor(props) {
    super();
    this.graphObjectData = props;

    this.state = {
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }

  render() {
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
          {/* <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          /> */}
        </Box>
      </Box>
    );
  }
}

export default LeftSide;
