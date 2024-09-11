import React from "react";
import { Box } from "@mui/material";
import Contact from "./contact/Contact";
import Orders from "./orders/Orders";
import Profile from "./profile/Profile";

const LeftSection = ({ serviceProviderDetails }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px 0",
        padding: "10px 16px",
      }}
    >
      <Profile serviceProviderDetails={serviceProviderDetails} />
      <Orders />
      <Contact serviceProviderDetails={serviceProviderDetails} />
    </Box>
  );
};

export default LeftSection;
