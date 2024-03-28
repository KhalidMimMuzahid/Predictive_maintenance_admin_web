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

const OptionsComponent = ({ props }) => {
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
  const [editIot, setEditIot] = useState({
    iotProductId: "",
    macId: "",
    price: "",
    module: "",
  });

  const handleEditSubmit = () => {
    if (editIot.macId === "") {
      alert("Please provide the sensor MAC ID to continue");
      return;
    }
    if (editIot.price === "") {
      alert("Please provide price of the sensor to continue");
      return;
    }
    if (editIot.module === "") {
      alert("Please select the model of the sensor to continue");
      return;
    }

    let iotProductId = editIot.iotProductId;
    let macId = editIot.macId;
    let price = editIot.price;
    let module = editIot.module;

    fetch("https://api.showaapp.com/admin/iot/edit-iot-sensor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        iotProductId,
        macId,
        price,
        module,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditOpen(false);
        alert("Successfully edited the IoT Sensor");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const handleDeleteSubmit = () => {
    let iotProductId = props.value.iotProductId;

    fetch("https://api.showaapp.com/admin/iot/delete-iot-sensor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        iotProductId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditOpen(false);
        alert("Successfully deleted the IoT Sensor");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const classes = useStyle();

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
      {deleteOpen && (
        <DeleteModal deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} />
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

          <MenuItem
            onClick={() => {
              // handleClose();
              // setEditIot({
              //   iotProductId: props.value.iotProductId,
              //   macId: props.value.macId,
              //   price: props.value.price,
              //   module: props.value.module,
              // });
              // setEditOpen(true);
            }}
          >
            <DoNotDisturbIcon style={{ color: "#6E6893" }} />
            <div className={classes.spacerSmall} />
            Stop
          </MenuItem>
        </StyledMenu>
      </div>
    </>
  );
};

export default OptionsComponent;
