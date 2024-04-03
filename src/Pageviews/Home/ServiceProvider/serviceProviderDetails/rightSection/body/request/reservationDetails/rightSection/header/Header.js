import { Box, Button } from "@mui/material";
import React from "react";

const Header = ({ header, setHeader }) => {
  return (
    <Box sx={{ display: "flex", border: "none", padding: "24px 24px" }}>
      <Button
        onClick={() => {
          setHeader("customer");
        }}
        sx={{
          fontWeight: "600",
          fontSize: "14px",
          padding: "4px 48px",
          borderRadius: "4px 4px",
          color: "#5A5C73",
          background: header === "customer" ? "#D9E3FF" : "",
        }}
      >
        Customer
      </Button>
      <Button
        onClick={() => {
          setHeader("machine");
        }}
        sx={{
          fontWeight: "600",
          fontSize: "14px",
          padding: "4px 48px",
          borderRadius: "4px 4px",
          color: "#5A5C73",
          background: header === "machine" ? "#D9E3FF" : "",
        }}
      >
        Machine
      </Button>
      <Button
        onClick={() => {
          setHeader("reservation");
        }}
        sx={{
          fontWeight: "600",
          fontSize: "14px",
          padding: "4px 48px",
          borderRadius: "4px 4px",
          color: "#5A5C73",
          background: header === "reservation" ? "#D9E3FF" : "",
        }}
      >
        Reservation
      </Button>
      <Button
        onClick={() => {
          setHeader("status");
        }}
        sx={{
          fontWeight: "600",
          fontSize: "14px",
          padding: "4px 48px",
          borderRadius: "4px 4px",
          color: "#5A5C73",
          background: header === "status" ? "#D9E3FF" : "",
        }}
      >
        Status
      </Button>
    </Box>
  );
};

export default Header;
