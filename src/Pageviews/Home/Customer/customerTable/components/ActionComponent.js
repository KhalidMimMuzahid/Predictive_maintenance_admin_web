import { MoreVert } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledMenu } from "../../styleComponents";
import editIcon from "../../../../../Assets/Home/customer/edit.png";
import viewIcon from "../../../../../Assets/Home/customer/view.png";

const ActionComponent = ({ props }) => {
  // const navigate = useNavigate();
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.value === "view") {
  //     navigate(`/customer/${props?.row?.details?.uid}`);
  //   }
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    // <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
    //   <FormControl fullWidth>
    //     <InputLabel id="demo-simple-select-label">Age</InputLabel>
    //     <select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       // value={age}
    //       label="Action"
    //       onChange={handleChange}
    //     >
    //       <option value="view">view</option>
    //       <option value="edit">edit</option>
    //     </select>
    //   </FormControl>
    // </Box>

    <Box>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>

      <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
        <Box sx={{ background: "#F4F2FF" }}>
          <Link
            to={`/customer/${props?.row?.details?.uid}/details`}
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
