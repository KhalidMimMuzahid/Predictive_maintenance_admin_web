import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";

const SendForBidingModal = ({ sendForBidding, setSendForBidding }) => {
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
        {/* Service Provider Table */}
      </Container>
    </Modal>
  );
};

export default SendForBidingModal;
