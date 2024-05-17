import { Typography } from "@mui/material";
import React from "react";

const ServiceProviderCompanyComponent = ({ props }) => {
  return (
    <Typography
      variant="p"
      sx={{ fontSize: "14px", color: "#25213B", fontWeight: "600" }}
    >
      {
        props?.reservationRequestGroup?.postBiddingProcess
          ?.serviceProviderCompany?.companyName
      }
    </Typography>
  );
};

export default ServiceProviderCompanyComponent;
