import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { StyledMenu } from "../../../Customer/styleComponents";

const ServiceProviderTableAction = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>

      <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
        <Box sx={{ background: "#F4F2FF" }}>
          <Link
            to={`/service-provider/${props?._id}`}
            style={{ textDecoration: "none" }}
          >
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <VisibilityIcon sx={{ color: "#6E6893" }} />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View
              </Typography>
            </MenuItem>
          </Link>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default ServiceProviderTableAction;
