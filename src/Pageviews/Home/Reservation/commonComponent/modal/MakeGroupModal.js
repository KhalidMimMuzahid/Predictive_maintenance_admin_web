import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { usePostReservationGroupMutation } from "../../../../../features/reservation/reservationSlice";

const MakeGroupModal = ({ viewOpen, setViewOpen, selectedReservations }) => {
  const [makeReservationGroup, { data, isError, error, isLoading, isSuccess }] =
    usePostReservationGroupMutation();

  useEffect(() => {
    if (isSuccess & !isLoading) {
      alert(data?.message);
      setViewOpen(false);
      // here we need to re fetch the data for all reservation group table
    }
    if (isError & !isLoading) {
      alert(error?.data?.message);
    }
  }, [isLoading]);
  const handleMakeResGroup = (e) => {
    e.preventDefault();
    const groupName = e.target.groupName.value;

    console.log({ groupName });
    //   biddingDate: {
    //     startDate: "2024-07-04T16:55:54.081+00:00",
    //     endDate: "2024-07-04T16:55:55.081+00:00"
    // }

    makeReservationGroup({
      reservationRequests: selectedReservations,
      groupName,
      biddingDate: {
        startDate: "2024-07-04T16:55:54.081+00:00",
        endDate: "2024-07-04T16:55:55.081+00:00",
      },
    });
  };

  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={viewOpen}
    >
      <Container
        sx={{
          width: "30%",
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
            Reservation Group
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
              setViewOpen(!viewOpen);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "8px 16px" }}>
          {/* make it  */}

          <form action="" onSubmit={handleMakeResGroup}>
            <label htmlFor="group-name">Group name</label>
            <input id="group-name" type="text" required name="groupName" />
            <button type="submit">Make Group</button>
          </form>
        </Box>
      </Container>
    </Modal>
  );
};

export default MakeGroupModal;
