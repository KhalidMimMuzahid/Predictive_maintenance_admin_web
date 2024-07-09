import { MoreHoriz, MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React, { useState } from "react";
import { StyledMenu } from "../../../../Customer/styleComponents";
import { Link } from "react-router-dom";

const ActionComponent = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <IconButton onClick={handleClick}>
          <MoreHoriz />
        </IconButton>

        <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
          <Box sx={{ background: "#F4F2FF" }}>
            <Link
              to={`/marketplace/view-products/product-details/${props?._id}`}
              style={{ textDecoration: "none" }}
            >
              <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
                <VisibilityOutlinedIcon />
                <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                  View
                </Typography>
              </MenuItem>
            </Link>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <CreateOutlinedIcon />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <DeleteOutlineOutlinedIcon />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Delete
              </Typography>
            </MenuItem>
          </Box>
        </StyledMenu>
      </Box>
    </>
  );
};

export default ActionComponent;
