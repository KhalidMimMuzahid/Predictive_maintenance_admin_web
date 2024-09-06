import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, ArcElement);

const DoughnutChart = ({ width, cutout }) => {
  const data = {
    labels: ["Active", "Schedule", "Inactive"],
    datasets: [
      {
        data: [809, 311, 644],
        backgroundColor: ["#17B82A", "#EB4141", "#FFA723"],
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    cutout: 80,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <Doughnut type="doughnut" data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
