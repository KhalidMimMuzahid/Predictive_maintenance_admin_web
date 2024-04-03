import React from "react";
import { Subscription } from "./subscription/Subscription";
import Profile from "./profile/Profile";
import { Box } from "@mui/material";
import Wallet from "./wallet/Wallet";

const LeftSection = ({ props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px 0",
        padding: "10px 16px 16px 16px",
      }}
    >
      <Profile />
      <Wallet />
      <Subscription />
    </Box>
  );
};

export default LeftSection;
