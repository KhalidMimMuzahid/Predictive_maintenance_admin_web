import {
  Close,
  CreateOutlined,
  DeleteOutlineOutlined,
  MoreVert,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../Customer/styleComponents";

const BidsActionComponent = () => {
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
          <MenuItem
            // onClick={() => setViewCustomerOpen(!viewCustomerOpen)}
            sx={{ display: "flex", gap: "0 6px" }}
          >
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
            // onClick={() => {
            //   setDeleteOpen(!deleteOpen);
            // }}
            sx={{ display: "flex", gap: "0 6px" }}
          >
            <DeleteOutlineOutlined />
            <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
              Delete
            </Typography>
          </MenuItem>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default BidsActionComponent;
