import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledMenu } from "../../styleComponents";
import editIcon from "../../../../../Assets/Home/customer/edit.png";
import viewIcon from "../../../../../Assets/Home/customer/view.png";

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
        <MoreVert />
      </IconButton>

      <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
        <Box sx={{ background: "#F4F2FF" }}>
          <Link
            to={`/customer/${props?.row?._id}/details`}
            style={{ textDecoration: "none" }}
          >
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={viewIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View
              </Typography>
            </MenuItem>
          </Link>

          <Link to="" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={editIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>
          </Link>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default ActionComponent;
