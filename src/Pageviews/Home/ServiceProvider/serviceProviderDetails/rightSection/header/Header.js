import classes from "./Header.module.css";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const Header = () => {
  const { _id } = useParams();
  const { width, breakpoint } = useSelector((state) => state.browser);
  console.log(breakpoint);
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "",
      fontWeight: "600",
      fontSize: breakpoint === "lg" ? "12px" : "16px",
      textDecoration: "none",
      background: isActive ? "#D9E3FF" : "",
      padding: "8px 28px",
      borderRadius: "4px 4px",
      color: "#5A5C73",
    };
  };
  return (
    <Box sx={{ display: "flex", border: "none" }} className={classes?.header}>
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
