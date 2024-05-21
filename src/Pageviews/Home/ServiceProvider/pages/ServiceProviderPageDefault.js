import { Box } from "@mui/material";
import React, { useState } from "react";
import ServiceProviderTable from "../serviceProviderTable/ServiceProviderTable";
import RequestVsTimeGRaph from "../requestVsTimeGRaph/RequestVsTimeGRaph";

const ServiceProviderPageDefault = () => {
  const [isRootServiceProviderPage, setIsRootServiceProviderPage] =
    useState(true);
  return (
    <Box>
      {isRootServiceProviderPage && (
        <Box>
          <RequestVsTimeGRaph />
        </Box>
      )}

      <ServiceProviderTable
        isRootServiceProviderPage={isRootServiceProviderPage}
        setIsRootServiceProviderPage={setIsRootServiceProviderPage}
      />
    </Box>
  );
};

export default ServiceProviderPageDefault;
