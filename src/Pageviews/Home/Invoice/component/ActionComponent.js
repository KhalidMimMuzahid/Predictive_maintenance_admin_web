import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React, { useState } from "react";
import { StyledMenu } from "../../Customer/styleComponents";

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
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>

      <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
        <Box sx={{ background: "#F4F2FF" }}>
          <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
            <VisibilityOutlinedIcon />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              View
            </Typography>
          </MenuItem>
          <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
            <CreateOutlinedIcon />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              Edit
            </Typography>
          </MenuItem>
          <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
            <SendOutlinedIcon />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              Send
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
  );
};

export default ActionComponent;
