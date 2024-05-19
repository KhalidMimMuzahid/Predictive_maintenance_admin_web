import { Box, Button } from "@mui/material";
import React from "react";

const Header = ({ headerName, setHeaderName }) => {
  return (
    <Box sx={{ display: "flex", border: "none", padding: "24px 24px" }}>
      <Button
        onClick={() => setHeaderName("customer")}
        sx={{
          color: headerName === "customer" ? "black" : "#5A5C73",
          textTransform: "none",
          fontWeight: "600",
          fontSize: "16px",
          textDecoration: "none",
          background: headerName === "customer" ? "#D9E3FF" : "",
          padding: "8px 48px",
          borderRadius: "4px 4px",
        }}
      >
        Customer
      </Button>
      <Button
        onClick={() => setHeaderName("machine")}
        sx={{
          color: headerName === "machine" ? "black" : "#5A5C73",
          textTransform: "none",
          fontWeight: "600",
          fontSize: "16px",
          textDecoration: "none",
          background: headerName === "machine" ? "#D9E3FF" : "",
          padding: "8px 48px",
          borderRadius: "4px 4px",
        }}
      >
        Machine
      </Button>
      <Button
        onClick={() => setHeaderName("reservation")}
        sx={{
          color: headerName === "reservation" ? "black" : "#5A5C73",
          textTransform: "none",
          fontWeight: "600",
          fontSize: "16px",
          textDecoration: "none",
          background: headerName === "reservation" ? "#D9E3FF" : "",
          padding: "8px 48px",
          borderRadius: "4px 4px",
        }}
      >
        Reservation
      </Button>
      <Button
        onClick={() => setHeaderName("status")}
        sx={{
          color: headerName === "status" ? "black" : "#5A5C73",
          textTransform: "none",
          fontWeight: "600",
          fontSize: "16px",
          textDecoration: "none",
          background: headerName === "status" ? "#D9E3FF" : "",
          padding: "8px 48px",
          borderRadius: "4px 4px",
        }}
      >
        Status
      </Button>
    </Box>
  );
};

export default Header;
