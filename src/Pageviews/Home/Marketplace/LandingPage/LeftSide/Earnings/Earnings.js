import { Box, Typography } from "@mui/material";
import React from "react";
import legendIcon from "../../../../../../Assets/Home/marketplace/doughnutLegend.png";
import DoughnutChart from "./DoughnutChart";

const Earnings = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
      >
        Earnings
      </Typography>
      <Box sx={{ position: "relative", marginTop: "28px" }}>
        <DoughnutChart />
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "35%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={legendIcon}
            style={{ width: "37px", height: "34px" }}
            alt=""
          />
          <Typography
            sx={{ color: "#4D5983", fontSize: "26px", fontWeight: "700" }}
          >
            $12,560
          </Typography>
          <Typography
            sx={{ color: "#868DAA", fontSize: "16px", fontWeight: "700" }}
          >
            Revenue
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Earnings;
