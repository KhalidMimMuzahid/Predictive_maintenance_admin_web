import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";
import Loader from "../../../../Utils/Loader";

const RequestVsTimeGRaph = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box sx={{ display: "flex", gap: "0 20px", marginTop: "16px" }}>
      <LeftSide />
      <RightSide />
    </Box>
  );
};

export default RequestVsTimeGRaph;
