import { Box } from "@mui/material";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Header = () => {
  const { _id } = useParams();
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "",
      fontWeight: "600",
      fontSize: "16px",
      textDecoration: "none",
      background: isActive ? "#D9E3FF" : "",
      padding: "8px 48px",
      borderRadius: "4px 4px",
      color: "#5A5C73",
    };
  };
  return (
    <Box sx={{ display: "flex", border: "none", padding: "24px 24px" }}>
      <NavLink style={navLinkStyle} to={`/service-provider/${_id}/request`}>
        Request
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${_id}/revenue`}>
        Revenue
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${_id}/team`}>
        Team
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${_id}/schedule`}>
        Schedule
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${_id}/setting`}>
        Settings
      </NavLink>
    </Box>
  );
};

export default Header;
