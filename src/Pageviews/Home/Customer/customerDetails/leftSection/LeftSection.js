import React from "react";
import Wallet from "./wallet/Wallet";
import { Subscription } from "./subscription/Subscription";
import Profile from "./profile/Profile";
import { Box } from "@mui/material";

const LeftSection = ({ customerDetailsData, subscriptionPackage }) => {
  console.log(customerDetailsData);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px 0",
        padding: "10px 16px 16px 16px",
      }}
    >
      <Profile customerDetailsData={customerDetailsData} />
      <Wallet customerDetailsData={customerDetailsData} />
      <Subscription subscriptionPackage={subscriptionPackage} />
    </Box>
  );
};

export default LeftSection;
