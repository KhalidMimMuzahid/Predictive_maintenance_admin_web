import rectangle from "../../../../../Assets/Home/customer/Rectangle.png";
import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { color } from "framer-motion";
import React from "react";

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
        {/* <LineChart
          // xAxis={[{ data: Object.keys(graphObjectData) }]}
          xAxis={[
            {
              scaleType: "point",
              data: Object?.keys(graphObjectData),
              domain: [0, "auto"],
            },
          ]}
          series={[
            {
              // data: Object.values(graphObjectData),
              data: Object.values(graphObjectData),
              label: "Active",
              color: "green",
            },
          ]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        /> */}
      </Box>
    </Box>
  );
};

export default LeftSide;
