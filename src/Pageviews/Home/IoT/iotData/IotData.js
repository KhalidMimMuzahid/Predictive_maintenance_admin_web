import { Box } from "@mui/material";
import React from "react";
import TotalIOTDevice from "./totalIOTDevice/TotalIOTDevice";
import TotalGeneralDevice from "./totalGeneralDevice/TotalGeneralDevice";
import TotalAvailableDevice from "./totalAvailableDevice/TotalAvailableDevice";

const IotData = () => {
  return (
    <Box>
      <TotalIOTDevice />
      <TotalGeneralDevice />
      <TotalAvailableDevice />
    </Box>
  );
};

export default IotData;
