import React from "react";
import { Subscription } from "./subscription/Subscription";
import Profile from "./profile/Profile";
import { Box } from "@mui/material";
import Wallet from "./wallet/Wallet";

const LeftSection = ({ customerDetails }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px 0",
        padding: "10px 16px 16px 16px",
      }}
    >
      <Profile customerDetails={customerDetails} />
      <Wallet />
      <Subscription customerDetails={customerDetails} />
    </Box>
  );
};

export default LeftSection;
