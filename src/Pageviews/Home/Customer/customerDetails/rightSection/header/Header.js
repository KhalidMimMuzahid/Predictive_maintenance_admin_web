import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Link to="details">Details</Link>
      <Link to="machine-status">Machine Status</Link>
      <Link to="invoice">Invoice</Link>
      <Link to="request">Request</Link>
    </Box>
  );
};

export default Header;
