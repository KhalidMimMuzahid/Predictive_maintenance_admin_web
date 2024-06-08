import React from "react";
import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";
import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

// demo linechart data
const uData = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 1500, 2600, 1500, 2600, 3700,
];
const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 3200, 1800, 3200, 1800, 5000,
];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LeftSide = ({ graphObjectData }) => {
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
              fontSize: "14px",
              fontWeight: "600",
              color: "#66737E",
            }}
          >
            <option
              value="export-as"
              sx={{
                color: "#66737E",
              }}
            >
              Export As
            </option>
          </select>
        </Box>
      </Box>
      <hr style={{ bgColor: "#E6EFF5", opacity: "25%" }} />
      <Box sx={{ padding: "24px 34px" }}>
        <Typography>Request</Typography>
        <Box>
          <LineChart
            xAxis={[
              {
                scaleType: "point",
                data: xLabels,
              },
            ]}
            series={[
              { data: pData, color: "#F33931" },
              { data: uData, color: "#3CAA49" },
            ]}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSide;
