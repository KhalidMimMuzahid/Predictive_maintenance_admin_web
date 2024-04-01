import { Box } from "@mui/material";
import React, { useState } from "react";
import ServiceProviderTable from "../serviceProviderTable/ServiceProviderTable";

const ServiceProviderPageDefault = () => {
  const [isRootServiceProviderPage, setIsRootServiceProviderPage] =
    useState(true);
  return (
    <Box>
      {isRootServiceProviderPage && <Box>{/* <RequestVsTimeGRaph /> */}</Box>}

      <ServiceProviderTable />
    </Box>
  );
};

export default ServiceProviderPageDefault;
