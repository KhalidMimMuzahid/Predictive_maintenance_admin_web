import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../../styleComponents";
import viewIcon from "../../../../../../../../Assets/Home/customer/view.png";
import editIcon from "../../../../../../../../Assets/Home/customer/edit.png";
import sentIcon from "../../../../../../../../Assets/Home/customer/sent.png";
import deleteIcon from "../../../../../../../../Assets/Home/customer/delete.png";
import { Link } from "react-router-dom";

import ViewModal from "../modal/ViewModal";
import EditModal from "../modal/EditModal";
import SendModal from "../modal/SendModal";
import DeleteModal from "../modal/DeleteModal";




const InvoiceAction = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(props?.row?.order_number);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {viewOpen && (
        <ViewModal
          viewOpen={viewOpen}
          setViewOpen={setViewOpen}
          props={props}
        />
      )}
      {editOpen && (
        <EditModal
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          props={props}
        />
      )}

      {sendOpen && (
        <SendModal
          sendOpen={sendOpen}
          setSendOpen={setSendOpen}
        />
      )}

      {deleteOpen && (
        <DeleteModal deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} />
      )}

      <Box>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
          <Box sx={{ background: "#F4F2FF" }}>
            <Link style={{ textDecoration: "none" }}>
              <MenuItem
              onClick={() => {
                setViewOpen(!viewOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}>
                <img src={viewIcon} alt="" />
                <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                  View
                </Typography>
              </MenuItem>
            </Link>

            <Link style={{ textDecoration: "none" }}>
              <MenuItem
              onClick={() => {
                setEditOpen(!editOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}>
                <img src={editIcon} alt="" />
                <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                  Edit
                </Typography>
              </MenuItem>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <MenuItem
              onClick={() => {
                setSendOpen(!sendOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}>
                <img src={sentIcon} alt="" />
                <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                  Send
                </Typography>
              </MenuItem>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <MenuItem
              onClick={() => {
                setDeleteOpen(!deleteOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}>
                <img src={deleteIcon} alt="" />
                <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                  Delete
                </Typography>
              </MenuItem>
            </Link>
          </Box>
        </StyledMenu>
      </Box>
    </>
  );
};

export default InvoiceAction;
