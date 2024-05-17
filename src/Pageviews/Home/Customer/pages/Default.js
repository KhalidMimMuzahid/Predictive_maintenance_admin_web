import React, { useState } from "react";
import CustomerTable from "../customerTable/CustomerTable";
import { Box } from "@mui/material";
import RequestVsTimeGRaph from "../requestVsTimeGRaph/RequestVsTimeGRaph";
import { useOutletContext } from "react-router-dom";

const Default = () => {
  const [isRootCustomerPage, setIsRootCustomerPage] = useOutletContext();
  return (
    <Box>
      {isRootCustomerPage && <RequestVsTimeGRaph />}
      <CustomerTable
        isRootCustomerPage={isRootCustomerPage}
        setIsRootCustomerPage={setIsRootCustomerPage}
      />
    </Box>
  );
};

export default Default;
