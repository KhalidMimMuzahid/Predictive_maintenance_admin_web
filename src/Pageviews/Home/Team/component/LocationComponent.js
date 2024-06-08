import { Box, Typography } from "@mui/material";
import React from "react";

const LocationComponent = ({ props }) => {
  return (
    <Box
      sx={{
        color: "#25213B",
        fontSize: "12px",
        fontWeight: "600",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#25213B",
          fontWeight: "600",
          fontSize: "12px",
        }}
      >
        {props?.location?.street + ", " + props?.location?.buildingName}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography>{props?.location?.city} </Typography>
        <span style={{ marginLeft: "5px" }}></span>
        <Typography>{props?.location?.country}</Typography>
      </Box>
    </Box>
  );
};

export default LocationComponent;
