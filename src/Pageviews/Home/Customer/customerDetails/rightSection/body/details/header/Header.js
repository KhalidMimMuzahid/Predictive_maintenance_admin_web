import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Link to="personal-info">Personal Info</Link>
      <Link to="address">Address</Link>
      <Link to="wallet">Wallet</Link>
    </Box>
  );
};

export default Header;
