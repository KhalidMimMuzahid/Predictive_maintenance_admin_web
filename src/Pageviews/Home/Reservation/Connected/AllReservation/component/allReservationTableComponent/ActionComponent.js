import {
  Close,
  CreateOutlined,
  Delete,
  DeleteOutlineOutlined,
  Equalizer,
  MoreVert,
  Stop,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../../Customer/styleComponents";

const ActionComponent = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function deleteReservation() {
    fetch(
      "https://api.showaapp.com/admin/reservation/delete-reservation/" +
        props.value._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Reservation deleted successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  function sendForBidding() {
    fetch(
      "https://api.showaapp.com/admin/reservation/send-for-bidding/" +
        props.value._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Sent for bidding successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  function closeBidding() {
    fetch(
      "https://api.showaapp.com/admin/reservation/close-bidding/" +
        props.value._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Bidding closed successfully");
        window.location.href = "/reservation/connected/all";
      });
  }
  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>

      <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
        <Box sx={{ background: "#F4F2FF" }}>
          <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
            <VisibilityOutlined />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              View
            </Typography>
          </MenuItem>
          <MenuItem
            // onClick={() => setIsEditInvoiceModalOpen(!isEditInvoiceModalOpen)}
            sx={{ display: "flex", gap: "0 6px" }}
          >
            <CreateOutlined />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              Edit
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              // setIsSendModalOpen(!isSendModalOpen);
            }}
            sx={{ display: "flex", gap: "0 6px" }}
          >
            <Close />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              Close
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              // setIsDeleteModalOpen(!isDeleteModalOpen);
            }}
            sx={{ display: "flex", gap: "0 6px" }}
          >
            <DeleteOutlineOutlined />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              Delete
            </Typography>
          </MenuItem>
        </Box>
      </StyledMenu>
    </div>
  );
};

export default ActionComponent;
