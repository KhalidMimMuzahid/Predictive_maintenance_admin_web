import { Box } from "@mui/material";
import React, { useState } from "react";
import ServiceProviderTable from "../serviceProviderTable/ServiceProviderTable";
import RequestVsTimeGRaph from "../requestVsTimeGRaph/RequestVsTimeGRaph";
import { useOutletContext } from "react-router-dom";

const ServiceProviderPageDefault = () => {
  const [isRootServiceProviderPage, setIsRootServiceProviderPage] =
    useOutletContext();
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
