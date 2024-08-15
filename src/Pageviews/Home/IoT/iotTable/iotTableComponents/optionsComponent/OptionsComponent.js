import React, { useState } from "react";
import { useStyle } from "../../../styles/iotStyle";
import {
  Container,
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Delete, Edit, MoreVert } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { StyledMenu } from "../../../styles/styleMenu";
import ViewModal from "../modal/ViewModal";
import EditModal from "../modal/EditModal";
import DeleteModal from "../modal/DeleteModal";

const OptionsComponent = ({ sensorModule }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const classes = useStyle();

  return (
    <>
      {viewOpen && (
        <ViewModal
          viewOpen={viewOpen}
          setViewOpen={setViewOpen}
          props={sensorModule}
        />
      )}
      {editOpen && (
        <EditModal
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          props={sensorModule}
        />
      )}
      {deleteOpen && (
        <DeleteModal
          deleteOpen={deleteOpen}
          setDeleteOpen={setDeleteOpen}
          sensorModule={sensorModule}
        />
      )}

      <div>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>
        <StyledMenu
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
              // setEditIot({
              //   iotProductId: props.value.iotProductId,
              //   macId: props.value.macId,
              //   price: props.value.price,
              //   module: props.value.module,
              // });
              setViewOpen(!viewOpen);
            }}
          >
            <VisibilityIcon style={{ color: "#6E6893" }} />
            <div className={classes.spacerSmall} />
            View
          </MenuItem>
          <MenuItem
            onClick={() => {
              setEditOpen(!editOpen);
            }}
          >
            <Edit style={{ color: "#6E6893" }} />
            <div className={classes.spacerSmall} />
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              setDeleteOpen(!deleteOpen);
            }}
          >
            <Delete style={{ color: "#6E6893" }} />
            <div className={classes.spacerSmall} />
            Delete
          </MenuItem>
        </StyledMenu>
      </div>
    </>
  );
};

export default OptionsComponent;
