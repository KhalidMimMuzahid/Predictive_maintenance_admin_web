import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../../styleComponents";
import viewIcon from "../../../../../../../../Assets/Home/customer/view.png";
import editIcon from "../../../../../../../../Assets/Home/customer/edit.png";
import sentIcon from "../../../../../../../../Assets/Home/customer/sent.png";
import deleteIcon from "../../../../../../../../Assets/Home/customer/delete.png";
import { Link } from "react-router-dom";

const InvoiceAction = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(props?.row?.order_number);
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
          <Link style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={viewIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View
              </Typography>
            </MenuItem>
          </Link>

          <Link style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={editIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={sentIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Send
              </Typography>
            </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={deleteIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Delete
              </Typography>
            </MenuItem>
          </Link>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default InvoiceAction;
