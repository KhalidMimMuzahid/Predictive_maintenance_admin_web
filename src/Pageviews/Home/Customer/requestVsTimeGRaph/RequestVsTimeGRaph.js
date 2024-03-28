import { Box } from "@mui/material";
import React, { useEffect } from "react";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";

const RequestVsTimeGRaph = () => {
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/reservation/common/request-vs-time-graph`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
      });
  }, []);

  return (
    <Box sx={{ display: "flex", gap: "0 20px", marginTop: "16px" }}>
      <LeftSide />
      <RightSide />
    </Box>
  );
};

export default RequestVsTimeGRaph;
