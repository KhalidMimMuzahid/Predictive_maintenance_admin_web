import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "",
      background: "none",
      fontWeight: "600",
      fontSize: "16px",
      borderBottom: isActive ? "2px solid #5A5C73" : "",
      textDecoration: "none",
      width: "150px",
      padding: "4px 16px 16px 16px",
      textAlign: "center",
      color: "#5A5C73",
    };
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        border: "0px",
        borderBottom: "1px solid #E6E8F0",
        pb: "6px",
      }}
    >
      <NavLink style={navLinkStyle} to="personal-info">
        Personal Info
      </NavLink>
      <NavLink style={navLinkStyle} to="address">
        Address
      </NavLink>
      <NavLink style={navLinkStyle} to="wallet">
        Wallet
      </NavLink>
    </Box>
  );
};

export default Header;
