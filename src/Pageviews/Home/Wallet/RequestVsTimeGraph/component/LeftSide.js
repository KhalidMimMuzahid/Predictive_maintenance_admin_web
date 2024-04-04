import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";
import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

// demo linechart data 

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

// const LeftSide = ({ graphObjectData }) => {
const LeftSide = () => {

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
      
      {/* linechart  */}
        <LineChart
         
          xAxis={[
            {
              scaleType: "point",
              data: xLabels,

            },
          ]}
          series={[
            { data: pData,  },
            { data: uData,  },
          ]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </Box>
    </Box>





  );
};

export default LeftSide;
