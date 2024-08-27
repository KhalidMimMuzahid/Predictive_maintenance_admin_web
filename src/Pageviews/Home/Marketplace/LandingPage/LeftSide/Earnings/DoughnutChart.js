import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(Tooltip, Legend, ArcElement);

const DoughnutChart = () => {
  const data = {
    labels: ["", "Income", "Taxes", "Fees"],
    datasets: [
      {
        data: [300, 809, 311, 644],
        backgroundColor: ["#ececec", "#17B82A", "#EB4141", "#FFA723"],
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    cutout: 150,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Doughnut type="doughnut" data={data} options={options} width={250} />
    </Box>
  );
};

export default DoughnutChart;
