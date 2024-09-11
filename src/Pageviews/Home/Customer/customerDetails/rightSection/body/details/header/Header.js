import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "#5A5C73",
      background: "none",
      fontWeight: "600",
      fontSize: breakpoint === "lg" ? "12px" : "16px",
      borderBottom: isActive ? "2px solid #5A5C73" : "",
      textDecoration: "none",
      width: "150px",
      padding: "4px 16px 16px 16px",
      textAlign: "center",
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
