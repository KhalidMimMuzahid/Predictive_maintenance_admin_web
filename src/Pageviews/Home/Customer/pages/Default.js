import React, { useState } from "react";
import CustomerTable from "../customerTable/CustomerTable";
import { Box } from "@mui/material";
import RequestVsTimeGRaph from "../requestVsTimeGRaph/RequestVsTimeGRaph";

const Default = () => {
  const [isRootCustomerPage, setIsRootCustomerPage] = useState(true);
  return (
    <Box>
      {isRootCustomerPage && (
        <Box>
          <RequestVsTimeGRaph />
        </Box>
      )}

      <CustomerTable />
    </Box>
  );
};

export default Default;
