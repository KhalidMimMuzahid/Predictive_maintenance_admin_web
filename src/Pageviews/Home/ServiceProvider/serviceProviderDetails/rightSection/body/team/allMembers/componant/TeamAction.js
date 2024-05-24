import { Delete, Equalizer, MoreVert, Stop } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import viewIcon from "../../../../../../../../../Assets/Home/customer/view.png";
import editIcon from "../../../../../../../../../Assets/Home/customer/edit.png";
import { StyledMenu } from "../../../../../../../Customer/styleComponents";
import TeamViewModal from "../modal/TeamViewModal";
import TeamEditModal from "../modal/TeamEditModal";

const TeamAction = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [teamViewOpen, setTeamViewOpen] = useState(false);
  const [teamEditOpen, setTeamEditOpen] = useState(false);
  const openEl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {teamViewOpen && (
        <TeamViewModal
          teamViewOpen={teamViewOpen}
          setTeamViewOpen={setTeamViewOpen}
          props={props}
        />
      )}
      {teamEditOpen && (
        <TeamEditModal
          teamEditOpen={teamEditOpen}
          setTeamEditOpen={setTeamEditOpen}
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
              onClick={() => {
                setTeamViewOpen(!teamViewOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={viewIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View
              </Typography>
            </MenuItem>

            <MenuItem
              onClick={() => {
                setTeamEditOpen(!teamEditOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={editIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>
          </Box>
        </StyledMenu>
      </Box>
    </>
  );
};

export default TeamAction;
