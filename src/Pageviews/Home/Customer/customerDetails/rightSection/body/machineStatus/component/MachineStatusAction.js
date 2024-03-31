import { Delete, Equalizer, MoreVert, Stop } from "@mui/icons-material";
import { Box, Button, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../../styleComponents";
import editIcon from "../../../../../../../../Assets/Home/customer/edit.png";
import sensorIcon from "../../../../../../../../Assets/Home/customer/Machine_Status/sensor.png";
import suspendedIcon from "../../../../../../../../Assets/Home/customer/Machine_Status/suspended.png";
import deleteIcon from "../../../../../../../../Assets/Home/customer/delete.png";
import EditModal from "../modal/EditModal";
import DeleteModal from "../modal/DeleteModal";
import SensorDataModal from "../modal/SensorDataModal";
import SuspendedModal from "../modal/SuspendedModal";

const MachineStatusAction = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const [sensorDataOpen, setSensorDataOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [suspendedOpen, setSuspendedOpen] = useState(false);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {editOpen && (
        <EditModal
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          props={props}
        />
      )}
      {sensorDataOpen && (
        <SensorDataModal
          sensorDataOpen={sensorDataOpen}
          setSensorDataOpen={setSensorDataOpen}
          props={props}
        />
      )}
      {deleteOpen && (
        <DeleteModal deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} />
      )}
      {suspendedOpen && (
        <SuspendedModal
          suspendedOpen={suspendedOpen}
          setSuspendedOpen={setSuspendedOpen}
        />
      )}
      <Box>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
          <Box sx={{ background: "#F4F2FF" }}>
            <MenuItem
              onClick={() => {
                setEditOpen(!editOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={editIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>

            <MenuItem
              onClick={() => {
                setSensorDataOpen(!sensorDataOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={sensorIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Sensor Data
              </Typography>
            </MenuItem>

            <MenuItem
              onClick={() => {
                setDeleteOpen(!deleteOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={deleteIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Delete
              </Typography>
            </MenuItem>

            <MenuItem
              onClick={() => {
                setSuspendedOpen(!suspendedOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={suspendedIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Suspended
              </Typography>
            </MenuItem>
          </Box>
        </StyledMenu>
      </Box>
    </>
  );
};

export default MachineStatusAction;
