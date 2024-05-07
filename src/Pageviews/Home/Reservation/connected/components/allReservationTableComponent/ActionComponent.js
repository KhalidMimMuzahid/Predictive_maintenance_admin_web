import { Delete, Equalizer, MoreVert, Stop } from "@mui/icons-material";
import { Box, IconButton, MenuItem } from "@mui/material";
import React, { useState } from "react";

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

      <Box
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={openEl}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            deleteReservation();
            handleClose();
          }}
        >
          <Delete style={{ color: "red" }} />
          Delete Reservation
        </MenuItem>

        {props.value.bidStatus === "" && (
          <MenuItem
            onClick={() => {
              sendForBidding();
              handleClose();
            }}
          >
            <Equalizer style={{ color: "pink" }} />
            Send for Bidding
          </MenuItem>
        )}

        {props.value.bidStatus === "Ongoing" && (
          <MenuItem
            onClick={() => {
              closeBidding();
              handleClose();
            }}
          >
            <Stop style={{ color: "purple" }} />
            Close Bidding
          </MenuItem>
        )}
      </Box>
    </div>
  );
};

export default ActionComponent;
