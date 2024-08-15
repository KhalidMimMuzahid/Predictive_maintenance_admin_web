import { DeleteOutline, DownloadOutlined, MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  // console.log(props?.row);
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVert sx={{ color: "#8B83BA" }} />
      </IconButton>

      <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
        <Box sx={{ background: "#F4F2FF" }}>
          <MenuItem
            sx={{
              display: "flex",
              gap: "0 6px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              <DownloadOutlined />
              Download
            </Typography>
          </MenuItem>

          <MenuItem
            sx={{ display: "flex", gap: "0 6px", alignItems: "center" }}
          >
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              <DeleteOutline />
              Delete
            </Typography>
          </MenuItem>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default ActionComponent;
