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
import { StyledMenu } from "../../../styles/styleMenu";

const OptionsComponent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [editOpen, setEditOpen] = useState(false);
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
      <Modal open={editOpen}>
        <Container className={classes.addUserContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ fontSize: "24px", fontWeight: "700" }}>
              Edit IoT Sensor
            </Typography>
            <div
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                setEditOpen(false);
              }}
            >
              <Close />
            </div>
          </div>

          <div>
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
          </div>

          <div>
            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                value={editIot.module}
                label="Module"
                size="small"
                onChange={(e) => {
                  setEditIot({ ...editIot, module: e.target.value });
                }}
              >
                <MenuItem value="Module 1">Module 1</MenuItem>
                <MenuItem value="Module 2">Module 2</MenuItem>
                <MenuItem value="Module 3">Module 3</MenuItem>
                <MenuItem value="Module 4">Module 4</MenuItem>
              </TextField>
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                placeholder="MAC ID"
                label="MAC ID"
                value={editIot.macId}
                onChange={(e) => {
                  setEditIot({ ...editIot, macId: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                label="Price (Yen)"
                value={editIot.price}
                placeholder="Price (Yen)"
                onChange={(e) => {
                  setEditIot({ ...editIot, price: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />
          </div>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <div
              className={classes.cancelButton}
              onClick={(e) => {
                setEditOpen(false);
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                handleEditSubmit();
              }}
            >
              Save
            </div>
          </div>
        </Container>
      </Modal>

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
              handleClose();
              setEditIot({
                iotProductId: props.value.iotProductId,
                macId: props.value.macId,
                price: props.value.price,
                module: props.value.module,
              });
              setEditOpen(true);
            }}
          >
            <Edit style={{ color: "#313E6A" }} />
            <div className={classes.spacerSmall} />
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              handleDeleteSubmit();
            }}
          >
            <Delete style={{ color: "red" }} />
            <div className={classes.spacerSmall} />
            Delete
          </MenuItem>
        </StyledMenu>
      </div>
    </>
  );
};

export default OptionsComponent;
