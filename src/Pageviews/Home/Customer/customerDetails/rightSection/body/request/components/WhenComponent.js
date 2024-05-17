import { Box, Typography } from "@mui/material";
import React from "react";

const WhenComponent = ({ props }) => {
  const date = props?.createdAt?.split("T")[0];
  const time = props?.createdAt?.split("T")[1];
  console.log(date);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "2px",
      }}
    >
      {props?.createdAt ? (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="p"
            sx={{ fontSize: "14px", color: "#25213B", fontWeight: "600" }}
          >
            {date}
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: "12px", color: "#25213B", fontWeight: "400" }}
          >
            {time}
          </Typography>
        </Box>
      ) : (
        <Typography
          variant="p"
          sx={{ fontSize: "14px", color: "#25213B", fontWeight: "600" }}
        >
          No Data
        </Typography>
      )}
    </Box>
  );
};

export default WhenComponent;
