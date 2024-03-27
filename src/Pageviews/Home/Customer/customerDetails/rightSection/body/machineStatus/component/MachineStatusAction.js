import { Delete, Equalizer, MoreVert, Stop } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../../styleComponents";
import editIcon from "../../../../../../../../Assets/Home/customer/edit.png";
import sensorIcon from "../../../../../../../../Assets/Home/customer/Machine_Status/sensor.png";
import suspendedIcon from "../../../../../../../../Assets/Home/customer/Machine_Status/suspended.png";
import deleteIcon from "../../../../../../../../Assets/Home/customer/delete.png";
import { Link } from "react-router-dom";

const MachineStatusAction = ({ link }) => {
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
          <Link to="" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={editIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>
          </Link>

          <Link to="" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={sensorIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Sensor Data
              </Typography>
            </MenuItem>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={deleteIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Delete
              </Typography>
            </MenuItem>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={suspendedIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Suspended
              </Typography>
            </MenuItem>
          </Link>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default MachineStatusAction;
