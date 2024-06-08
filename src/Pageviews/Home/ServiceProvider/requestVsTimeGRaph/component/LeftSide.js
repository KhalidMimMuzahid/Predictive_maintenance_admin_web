import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

const LeftSide = () => {
  const [style, setStyle] = useState("");

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0 12px",
              marginLeft: "20px",
            }}
          >
            <Box
              sx={{
                width: "18px",
                height: "18px",
                background: "#26C1C9",
                borderRadius: "2px",
              }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#5A6872" }}
            >
              Service Provider Daily Request
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
      </Box>

      <Box sx={{ padding: "24px 34px" }}>
        <BarChart
          // width={500}
          height={350}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
          series={[
            { data: pData, id: "pvId", color: "#51AB93" },
            { data: uData, id: "uvId", color: "#F33931" },
          ]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
      </Box>
    </Box>
  );
};

export default LeftSide;
