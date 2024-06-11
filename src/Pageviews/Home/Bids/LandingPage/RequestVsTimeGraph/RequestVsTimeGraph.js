import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { MoreHoriz } from "@mui/icons-material";

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

const RequestVsTimeGraph = () => {
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
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <p style={{ color: "#000000", fontSize: "24px", fontWeight: "400" }}>
            Comparison
          </p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 150,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Total</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  //   value={provider}
                  label="Total"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"Total"}>Total</MenuItem>
                  <MenuItem value={"Completed"}>Completed</MenuItem>
                  <MenuItem value={"On-going"}>On-going</MenuItem>
                  <MenuItem value={"Canceled"}>Canceled</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 150,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Completed</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  //   value={provider}
                  label="Completed"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Ongoing</MenuItem>
                  <MenuItem value={20}>Online</MenuItem>
                  <MenuItem value={30}>Offline</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button>
              <MoreHoriz />
            </Button>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px 0px 20px",
          borderRadius: "6px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0 12px" }}>
            <Box
              sx={{
                width: "18px",
                height: "18px",
                background: "#81C926",
                borderRadius: "2px",
              }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#5A6872" }}
            >
              Orders
            </Typography>
          </Box>
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
              Completed
            </Typography>
          </Box>
        </Box>
        <Box>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 150,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Style: Bar</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={style}
                  label="Style: Bar"
                  onChange={handleStyleChange}
                >
                  <MenuItem value={10}>Line</MenuItem>
                  <MenuItem value={20}>Pie</MenuItem>
                  <MenuItem value={30}>Bar</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#24459C",
                  minWidth: 150,
                }}
                variant="contained"
              >
                Download
              </Button>
            </div>
          </div>
        </Box>
      </Box>
      <Box sx={{ padding: "24px 34px" }}>
        <BarChart
          // width={500}
          height={350}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
          series={[
            { data: pData, id: "pvId", color: "#81C926" },
            { data: uData, id: "uvId", color: "#26C1C9" },
          ]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
      </Box>
    </Box>
  );
};

export default RequestVsTimeGraph;
