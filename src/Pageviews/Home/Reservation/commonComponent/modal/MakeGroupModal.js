import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usePostReservationGroupMutation } from "../../../../../features/resGroup/resGroupSlice";

const MakeGroupModal = ({
  viewOpen,
  setViewOpen,
  selectedReservations,
  refetch,
}) => {
  const [startDateSection, setStartDateSection] = useState(false);
  const [endDateSection, setEndDateSection] = useState(false);
  const [makeReservationGroup, { data, isError, error, isLoading, isSuccess }] =
    usePostReservationGroupMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      refetch();
      setViewOpen(false);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const handleMakeResGroup = (e) => {
    e.preventDefault();
    const groupName = e?.target?.groupName?.value;
    const startDate = e?.target?.start_date?.value
      ? e?.target?.start_date?.value + "T23:59:59.999+00:00"
      : undefined;

    const endDate = e?.target?.end_date?.value
      ? e?.target?.end_date?.value + "T23:59:59.999+00:00"
      : undefined;

    makeReservationGroup({
      reservationRequests: selectedReservations,
      groupName,
      biddingDate: {
        startDate,
        endDate,
      },
    });
    e.target.reset();
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

          <form
            action=""
            onSubmit={handleMakeResGroup}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="group-name" style={{ fontWeight: "600" }}>
                Group name
              </label>
              <input
                style={{
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
                id="group-name"
                type="text"
                required
                name="groupName"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "50%",
                }}
              >
                <Button
                  onClick={() => setStartDateSection(!startDateSection)}
                  sx={{
                    textTransform: "none",
                    background: "#24459C",
                    "&:hover": {
                      background: "#24459C",
                    },
                    color: "white",
                    width: "100%",
                  }}
                >
                  Start Date
                </Button>
                {startDateSection && (
                  <input
                    type="date"
                    name="start_date"
                    id=""
                    style={{
                      background: "#F6F6F6",
                      padding: "16px",
                      border: "none",
                      borderRadius: "4px",
                      color: "#65748B",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "50%",
                }}
              >
                <Button
                  onClick={() => setEndDateSection(!endDateSection)}
                  sx={{
                    textTransform: "none",
                    background: "#24459C",
                    "&:hover": {
                      background: "#24459C",
                    },
                    color: "white",
                    width: "100%",
                  }}
                >
                  End Date
                </Button>
                {endDateSection && (
                  <input
                    type="date"
                    name="end_date"
                    id=""
                    style={{
                      background: "#F6F6F6",
                      padding: "16px",
                      border: "none",
                      borderRadius: "4px",
                      color: "#65748B",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  />
                )}
              </Box>
            </Box>
            <Button
              type="submit"
              sx={{
                textTransform: "none",
                background: "#24459C",
                "&:hover": {
                  background: "#24459C",
                },
                color: "white",
                width: "100%",
              }}
            >
              Make Group
            </Button>
          </form>
        </Box>
      </Container>
    </Modal>
  );
};

export default MakeGroupModal;
