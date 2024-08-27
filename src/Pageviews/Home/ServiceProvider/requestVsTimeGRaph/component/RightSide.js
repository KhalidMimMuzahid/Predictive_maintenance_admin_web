import React from "react";
import { Box, Typography } from "@mui/material";
import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";
import DoughnutChart from "../../../../../Utils/Chart/DoughnutChart/DoughnutChart";

const RightSide = () => {
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
            Service Provider Status
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <CanvasJSChart options={options} /> */}
        <DoughnutChart />
      </Box>
    </Box>
  );
};

export default RightSide;
