import { Typography } from "@mui/material";
import React from "react";

const BidsComponent = ({ props }) => {
  return (
    <Typography sx={{ fontWeight: "600" }}>
      {props?.allBids ? props?.allBids?.length : "No Bids Found"}
    </Typography>
  );
};

export default BidsComponent;
