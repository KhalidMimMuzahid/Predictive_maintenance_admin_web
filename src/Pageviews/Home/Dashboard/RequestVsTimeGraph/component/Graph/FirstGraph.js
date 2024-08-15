import { Box } from "@mui/material";
import React, { useState } from "react";
import { BarChart } from "@mui/x-charts";

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

const FirstGraph = () => {
  const [style, setStyle] = useState("");

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "0",
        borderRadius: "4px",
        background: "white",
      }}
    >
      <Box sx={{ padding: "24px 34px" }}>
        <BarChart
          // width={500}
          height={400}
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

export default FirstGraph;
