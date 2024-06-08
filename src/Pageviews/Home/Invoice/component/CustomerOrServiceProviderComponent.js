import { Box, Typography } from "@mui/material";
import React from "react";

const CustomerOrServiceProviderComponent = ({ props }) => {
  return (
    <Box>
      <Typography sx={{ color: "#25213B", fontWeight: "600" }}>
        {props?.user?.showaUser?.name?.firstName +
          " " +
          props?.user?.showaUser?.name?.lastName}
      </Typography>
      <Typography sx={{ color: "#6E6893", fontWeight: "400" }}>
        {props?.user?.showaUser?.phone}
      </Typography>
    </Box>
  );
};

export default CustomerOrServiceProviderComponent;
