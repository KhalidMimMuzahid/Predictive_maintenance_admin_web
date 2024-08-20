import { Box } from "@mui/material";
import React from "react";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";

const RequestVsTimeGraph = () => {
  return (
    <Box sx={{ display: "flex", gap: "0 20px", marginTop: "24px" }}>
      <LeftSide />
      <RightSide />
    </Box>
  );
};

export default RequestVsTimeGraph;
