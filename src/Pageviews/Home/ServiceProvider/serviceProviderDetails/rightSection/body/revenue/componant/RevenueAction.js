import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../../../Customer/styleComponents";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const RevenueAction = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [closeOpen, setCloseOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
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
          <MoreVert />
        </IconButton>

        <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
          <Box sx={{ background: "#F4F2FF" }}>
            <MenuItem
              // onClick={() => {
              //   setViewReservationDetailsMainModalOpen(
              //     !viewReservationDetailsMainModalOpen
              //   );
              // }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <VisibilityOutlinedIcon />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View
              </Typography>
            </MenuItem>

            <MenuItem
              onClick={() => {
                setEditOpen(!editOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <EditOutlinedIcon />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <CloseOutlinedIcon />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Close
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setDeleteOpen(!deleteOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
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

export default RevenueAction;
