import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../Customer/styleComponents";
import { Link } from "react-router-dom";
import viewIcon from "../../../../Assets/Home/customer/view.png";
import editIcon from "../../../../Assets/Home/customer/edit.png";

const TeamActionComponent = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  console.log(props);

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
          <Link
            to={`/service-provider/${props?.company?._id}/team`}
            style={{ textDecoration: "none" }}
          >
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={viewIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View
              </Typography>
            </MenuItem>
          </Link>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default TeamActionComponent;
