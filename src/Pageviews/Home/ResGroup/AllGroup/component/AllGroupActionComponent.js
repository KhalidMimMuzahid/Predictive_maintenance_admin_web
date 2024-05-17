import { Details, MoreVert, VisibilityOutlined } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../Customer/styleComponents";
import ViewBidsModal from "../modal/ViewBidsModal";
import ViewDetailsModal from "../modal/ViewDetailsModal";

const AllGroupActionComponent = ({ props }) => {
  const [viewBidsModal, setViewBidsModal] = useState(false);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
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
      {viewBidsModal && (
        <ViewBidsModal
          viewBidsModal={viewBidsModal}
          setViewBidsModal={setViewBidsModal}
          reservationRequestGroup={props?._id}
          props={props}
        />
      )}
      {viewDetailsModalOpen && (
        <ViewDetailsModal
          viewDetailsModalOpen={viewDetailsModalOpen}
          setViewDetailsModalOpen={setViewDetailsModalOpen}
          props={props}
        />
      )}
      <Box>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
          <Box sx={{ background: "#F4F2FF" }}>
            <MenuItem
              onClick={() => setViewBidsModal(!viewBidsModal)}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <VisibilityOutlined />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View Bids
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => setViewDetailsModalOpen(!viewDetailsModalOpen)}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <Details />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Group Details
              </Typography>
            </MenuItem>
          </Box>
        </StyledMenu>
      </Box>
    </>
  );
};

export default AllGroupActionComponent;
