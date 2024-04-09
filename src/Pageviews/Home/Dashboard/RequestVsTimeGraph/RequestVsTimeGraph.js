import { Box } from "@mui/material";
import React from "react";
import FirstGraph from "./component/FirstGraph";
import SecondGraph from "./component/SecondGraph";


const RequestVsTimeGraph = () => {

  return (
    <Box >
      <FirstGraph />
      <SecondGraph />

    </Box>
  );
};

export default RequestVsTimeGraph;
