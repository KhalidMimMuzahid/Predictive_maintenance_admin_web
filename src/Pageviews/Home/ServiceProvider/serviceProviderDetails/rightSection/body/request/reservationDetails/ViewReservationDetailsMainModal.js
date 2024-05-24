import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";
import { useGetCustomerDetailsQuery } from "../../../../../../../../features/customers/customersSlice";

const ViewReservationDetailsMainModal = ({
  viewReservationDetailsMainModalOpen,
  setViewReservationDetailsMainModalOpen,
  props,
}) => {
  const { data: customerDetails, isLoading } = useGetCustomerDetailsQuery(
    props?.user
  );
  // console.log(customerDetails);
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={viewReservationDetailsMainModalOpen}
    >
      <Container
        sx={{
          width: "60%",
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
              setViewReservationDetailsMainModalOpen(
                !viewReservationDetailsMainModalOpen
              );
            }}
          >
            <Close />
          </Button>
        </Box>

        {/* Reservation Details */}
        <Box sx={{ display: "flex" }}>
          <Box>
            <LeftSection customerDetails={customerDetails?.data} />
          </Box>
          <Box>
            <RightSection
              customerDetails={customerDetails?.data}
              props={props}
            />
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default ViewReservationDetailsMainModal;
