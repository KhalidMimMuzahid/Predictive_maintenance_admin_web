import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";

const ViewDetailsModal = ({
  viewDetailsModalOpen,
  setViewDetailsModalOpen,
  props,
}) => {
  console.log(props);
  // Group Name
  // Group ID
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={viewDetailsModalOpen}
    >
      <Container
        sx={{
          width: "50%",
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
            Group Details
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
              setViewDetailsModalOpen(!viewDetailsModalOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box>
          <Box></Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default ViewDetailsModal;
