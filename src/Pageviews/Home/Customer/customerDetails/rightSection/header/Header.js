import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "",
      fontWeight: "600",
      fontSize: breakpoint === "lg" ? "12px" : "16px",
      textDecoration: "none",
      background: isActive ? "#D9E3FF" : "",
      padding: "8px 48px",
      borderRadius: "4px 4px",
      color: "#5A5C73",
    };
  };

  return (
    <Box sx={{ display: "flex", border: "none", padding: "24px 24px" }}>
      <NavLink style={navLinkStyle} to="details">
        Details
      </NavLink>
      <NavLink style={navLinkStyle} to="machine-status">
        Machine Status
      </NavLink>
      <NavLink style={navLinkStyle} to="invoice">
        Invoice
      </NavLink>
      <NavLink style={navLinkStyle} to="request">
        Request
      </NavLink>
    </Box>
  );
};

export default Header;
