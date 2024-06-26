import React from "react";
import CurrentOffer from "./CurrentOffer/CurrentOffer";
import TopSelling from "./TopSelling/TopSelling";
import { Box } from "@mui/material";

const RightSide = () => {
  return (
    <Box
      sx={{
        width: "40%",
        padding: "20px",
        borderRadius: "4px",
      }}
    >
      <CurrentOffer />
      <TopSelling />
    </Box>
  );
};

export default RightSide;
