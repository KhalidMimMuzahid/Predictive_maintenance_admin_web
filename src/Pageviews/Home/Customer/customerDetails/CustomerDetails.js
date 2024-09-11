import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";
import {
  useGetCustomerDetailsQuery,
  useGetCustomerSubscriptionDataQuery,
  useGetCustomerWalletQuery,
} from "../../../../features/customers/customersSlice";

const CustomerDetails = () => {
  const { _id } = useParams();

  //   fetch those data
  // subscription
  // machiens

  // Coming From Redux
  const { data: customerDetailsData } = useGetCustomerDetailsQuery(_id);
  const { data: walletData } = useGetCustomerWalletQuery(_id);
  const { data: subscriptionData } = useGetCustomerSubscriptionDataQuery(_id);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        marginTop: "24px",
      }}
    >
      {/* left sidebar  */}
      <Box
        sx={{
          bgcolor: "white",
          padding: "12px",
          width: "22%",
          borderRadius: "5px",
        }}
      >
        <LeftSection
          customerDetailsData={customerDetailsData?.data}
          subscriptionPackage={subscriptionData?.currentPackages}
        />
      </Box>
      {/* right sidebar  */}
      <Box
        sx={{
          bgcolor: "white",
          width: "75%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
        }}
      >
        <RightSection />
      </Box>
    </Box>
  );
};

export default CustomerDetails;
