import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import {
  useGetCustomerDetailsQuery,
  useGetCustomerSubscriptionDataQuery,
  useGetCustomerWalletQuery,
} from "../../../../../../features/customers/customersSlice";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";
// import RightSection from "./rightSection/RightSection";

const CustomerDetails = ({ props, viewCustomerOpen, setViewCustomerOpen }) => {
  // Coming From Redux
  const { data: customerDetailsData } = useGetCustomerDetailsQuery(
    props?.user?._id
  );
  const { data: walletData } = useGetCustomerWalletQuery(props?.user?.uid);
  const { data: subscriptionData } = useGetCustomerSubscriptionDataQuery(
    props?.user?.uid
  );

  return (
    <Modal
      sx={{
        width: "100%",
        overflow: "scroll",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={viewCustomerOpen}
    >
      <Container
        sx={{
          marginTop: "72px",
          width: "100%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            View Details
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setViewCustomerOpen(!viewCustomerOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
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
              width: "30%",
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
              width: "70%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <RightSection
              customerDetailsData={customerDetailsData?.data}
              props={props}
            />
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default CustomerDetails;
