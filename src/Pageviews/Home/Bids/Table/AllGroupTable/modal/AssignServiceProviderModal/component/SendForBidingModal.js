import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePatchSetBidingDateMutation } from "../../../../../../../../features/resGroup/resGroupSlice";
import { toast } from "react-toastify";

const SendForBidingModal = ({
  sendForBidding,
  setSendForBidding,
  biddingDate,
  _id,
  refetchForGetALlResGroup,
}) => {
  const [setBidingDate, { data, isError, error, isLoading, isSuccess }] =
    usePatchSetBidingDateMutation();
  const endDateParsed = biddingDate?.endDate?.split("T")[0];

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      refetchForGetALlResGroup();
      setSendForBidding(false);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const handleSendForBiding = (e) => {
    e.preventDefault();
    const startDate = e?.target?.start_date?.value
      ? e?.target?.start_date?.value + "T23:59:59.999+00:00"
      : undefined;

    const endDate = e?.target?.end_date?.value
      ? e?.target?.end_date?.value + "T23:59:59.999+00:00"
      : undefined;
    setBidingDate({
      reservationRequestGroup: _id,
      biddingDate: { biddingDate: { startDate, endDate } },
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
      open={sendForBidding}
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
            Send For Biding
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
              setSendForBidding(!sendForBidding);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "8px 16px" }}>
          {/* make it  */}

          <form
            action=""
            onSubmit={handleSendForBiding}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                width: "100%",
                marginTop: "24px",
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
                <Typography
                  sx={{
                    background: "#24459C",
                    color: "white",
                    width: "100%",
                    padding: "4px 0px",
                    textAlign: "center",
                    borderRadius: "4px",
                  }}
                >
                  Start Date
                </Typography>
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
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "50%",
                }}
              >
                <Typography
                  sx={{
                    background: "#24459C",
                    color: "white",
                    width: "100%",
                    padding: "4px 0px",
                    textAlign: "center",
                    borderRadius: "4px",
                  }}
                >
                  End Date
                </Typography>
                <input
                  type="date"
                  name="end_date"
                  id=""
                  value={endDateParsed}
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
              Send
            </Button>
          </form>
        </Box>
      </Container>
    </Modal>
  );
};

export default SendForBidingModal;
