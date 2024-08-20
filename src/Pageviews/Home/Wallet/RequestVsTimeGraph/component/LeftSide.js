import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";
import { Box, Typography } from "@mui/material";
import React from "react";
import LineCharts from "./LineCharts";

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
            <option value="">Export As</option>
          </select>
        </Box>
      </Box>
      <hr style={{ bgColor: "#E6EFF5", opacity: "25%" }} />
      <LineCharts />
    </Box>
  );
};

export default LeftSide;
