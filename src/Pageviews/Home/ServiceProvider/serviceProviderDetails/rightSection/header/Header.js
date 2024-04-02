import { Box } from "@mui/material";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Header = () => {
  const { uid } = useParams();
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
  console.log("UID Search", uid);
  return (
    <Box sx={{ display: "flex", border: "none", padding: "24px 24px" }}>
      <NavLink style={navLinkStyle} to={`/service-provider/${uid}/request`}>
        Request
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${uid}/revenue`}>
        Revenue
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${uid}/team`}>
        Team
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${uid}/schedule`}>
        Schedule
      </NavLink>
      <NavLink style={navLinkStyle} to={`/service-provider/${uid}/setting`}>
        Setting
      </NavLink>
    </Box>
  );
};

export default Header;
