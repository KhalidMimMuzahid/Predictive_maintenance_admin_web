import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";
import CustomerTable from "./CustomerTable";

const CustomerListModal = ({ isCustomerListOpen, setIsCustomerListOpen }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={isCustomerListOpen}
    >
      <Container
        sx={{
          width: "50%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
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
            Customer List
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
              setIsCustomerListOpen(!isCustomerListOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
        <CustomerTable />
        <Box
          sx={{
            padding: "12px 28px",
            display: "flex",
            justifyContent: "end",
            gap: "24px",
          }}
        >
          <Button
            onClick={() => {
              setIsCustomerListOpen(!isCustomerListOpen);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "white",
              fontSize: "14px",
              color: "#959596",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setIsCustomerListOpen(!isCustomerListOpen);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Assign
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default CustomerListModal;
