import { AddCircleOutline, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  holder: {
    padding: theme.spacing(2),
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontSize: 24,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  spacerSmall: {
    width: "10px",
    height: "10px",
  },
  topHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableHolder: {
    width: "90%",
    backgroundColor: "white",
    padding: theme.spacing(2),
  },

  optionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#5A6872",
  },
  optionSubtitle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#69677C",
  },

  input: {
    width: "100%",
    backgroundColor: "white",
  },

  addContainer: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    width: "400px",
    height: "200px",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
    },
  },
  saveButton: {
    backgroundColor: "#24459c",
    padding: "10px 35px",
    color: "white",
    cursor: "pointer",
    borderRadius: "25px",
    fontSize: "14px",
  },
  cancelButton: {
    backgroundColor: "#F6F6F6",
    padding: "10px 35px",
    color: "#959596",
    cursor: "pointer",
    borderRadius: "25px",
    fontSize: "14px",
  },
}));

const ControlPanelCustomerScreen = () => {
  const classes = useStyle();
  const [occupationOpen, setOccupationOpen] = useState(false);
  const [shopTypeOpen, setShopTypeOpen] = useState(false);
  const [washingMachineTypeOpen, setWashingMachineTypeOpen] = useState(false);
  const [nonConnectedMachineTypeOpen, setNonConnectedMachineTypeOpen] =
    useState(false);

  const [newOccupation, setNewOccupation] = useState("");
  const [newShopType, setNewShopType] = useState("");
  const [newWashingMachineType, setNewWashingMachine] = useState("");
  const [newNotConnectedMachineType, setNewNonConnectedMachineType] =
    useState("");

  const [occupation, setOccupation] = useState([]);
  const [shopType, setShopType] = useState([]);
  const [washingMachineType, setWashingMachineType] = useState([]);
  const [nonConnectedMachineType, setNonConnectedMachineType] = useState([]);

  const addNewOccupation = () => {
    if (newOccupation === "") {
      alert("Please provide the new occupation to continue");
      return;
    }

    fetch("https://api.showaapp.com/admin/control-panel/add-new-occupation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newOccupation,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOccupationOpen(false);
        setNewOccupation("");
        alert(data["message"]);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const addNewShopType = () => {
    if (newShopType === "") {
      alert("Please provide the new shop type to continue");
      return;
    }

    fetch("https://api.showaapp.com/admin/control-panel/add-new-shop-type", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newShopType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShopTypeOpen(false);
        setNewShopType("");
        alert(data["message"]);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const addNewWashingMachinne = () => {
    if (newWashingMachineType === "") {
      alert("Please provide the new washing machine type to continue");
      return;
    }

    fetch(
      "https://api.showaapp.com/admin/control-panel/add-new-washing-machine-type",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newWashingMachineType,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setWashingMachineTypeOpen(false);
        setNewWashingMachine("");
        alert(data["message"]);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const addNewNonConnectedMachinetype = () => {
    if (newNotConnectedMachineType === "") {
      alert("Please provide the new non connected machine type to continue");
      return;
    }

    fetch(
      "https://api.showaapp.com/admin/control-panel/add-new-not-connected-machine-type",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newNotConnectedMachineType,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setNonConnectedMachineTypeOpen(false);
        setNewNonConnectedMachineType("");
        alert(data["message"]);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  function getCustomer() {
    var url = "https://api.showaapp.com/admin/control-panel/get-customer";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOccupation(data["controlPanelCustomer"].occupation);
        setShopType(data["controlPanelCustomer"].shopType);
        setWashingMachineType(data["controlPanelCustomer"].washingMachineType);
        setNonConnectedMachineType(
          data["controlPanelCustomer"].notConnectedMachineType
        );
      });
  }

  useEffect(() => {
    getCustomer();
  });

  return (
    <>
      <Modal open={occupationOpen}>
        <div className={classes.addContainer}>
          <div
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography>Add occupation</Typography>
            <div
              onClick={() => {
                setOccupationOpen(false);
              }}
            >
              <Close />
            </div>
          </div>

          <div className={classes.spacerSmall} />

          <TextField
            className={classes.input}
            size="small"
            placeholder="Occupation"
            label="Occupation"
            value={newOccupation}
            onChange={(e) => {
              setNewOccupation(e.target.value);
            }}
          />

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
                setOccupationOpen(false);
                setNewOccupation("");
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                addNewOccupation();
                setNewOccupation("");
              }}
            >
              Add
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={shopTypeOpen}>
        <div className={classes.addContainer}>
          <div
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography>Add shop type</Typography>
            <div
              onClick={() => {
                setShopTypeOpen(false);
              }}
            >
              <Close />
            </div>
          </div>

          <div className={classes.spacerSmall} />

          <TextField
            className={classes.input}
            size="small"
            placeholder="Shop type"
            label="Shop type"
            value={newShopType}
            onChange={(e) => {
              setNewShopType(e.target.value);
            }}
          />

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
                setShopTypeOpen(false);
                setNewShopType("");
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                addNewShopType();
                setNewShopType("");
              }}
            >
              Add
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={washingMachineTypeOpen}>
        <div className={classes.addContainer}>
          <div
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography>Add washing machine type</Typography>
            <div
              onClick={() => {
                setWashingMachineType(false);
              }}
            >
              <Close />
            </div>
          </div>

          <div className={classes.spacerSmall} />

          <TextField
            className={classes.input}
            size="small"
            placeholder="Washing Machine Type"
            label="Washing Machinne Type"
            value={newWashingMachineType}
            onChange={(e) => {
              setNewWashingMachine(e.target.value);
            }}
          />

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
                setWashingMachineTypeOpen(false);
                setNewWashingMachine("");
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                addNewWashingMachinne();
                setNewWashingMachine("");
              }}
            >
              Add
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={nonConnectedMachineTypeOpen}>
        <div className={classes.addContainer}>
          <div
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography>Add non connected machine type</Typography>
            <div
              onClick={() => {
                setNonConnectedMachineTypeOpen(false);
              }}
            >
              <Close />
            </div>
          </div>

          <div className={classes.spacerSmall} />

          <TextField
            className={classes.input}
            size="small"
            placeholder="Non connected machine type"
            label="Non connected machine type"
            value={newNotConnectedMachineType}
            onChange={(e) => {
              setNewNonConnectedMachineType(e.target.value);
            }}
          />

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
                setNonConnectedMachineTypeOpen(false);
                setNewNonConnectedMachineType("");
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                addNewNonConnectedMachinetype();
                setNewNonConnectedMachineType("");
              }}
            >
              Add
            </div>
          </div>
        </div>
      </Modal>

      <Box sx={{ padding: "40px" }}>
        <div>
          <div className={classes.title}>Control Panel</div>
          <div className={classes.spacerSmall}></div>
          <div style={{ display: "flex" }}>
            <div
              style={{ color: "black", marginRight: "4px" }}
              className={classes.subtitle}
            >
              Dashboard /
            </div>
            <div
              style={{ color: "black", marginRight: "4px" }}
              className={classes.subtitle}
            >
              Control Panel /
            </div>
            <div style={{ color: "#24459c" }} className={classes.subtitle}>
              Customer
            </div>
          </div>
        </div>

        <Box
          sx={{
            borderRadius: "4px",
            background: "white",
            padding: "24px 40px",
            marginTop: "24px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <div className={classes.optionTitle}>Type of Occupation</div>
              <div className={classes.optionSubtitle}>
                User Input’s Occupation Type
              </div>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8}>
              <FormControl fullWidth>
                <TextField
                  select
                  id="demo-simple-select"
                  label="Occupation Type"
                  size="small"
                >
                  {occupation.length != 0 ? (
                    occupation.map((occu) => (
                      <MenuItem value={occu}>{occu}</MenuItem>
                    ))
                  ) : (
                    <MenuItem value="no occupation">Occupation Type</MenuItem>
                  )}
                </TextField>
              </FormControl>
            </Grid>

            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton
                onClick={() => {
                  setOccupationOpen(true);
                }}
              >
                <AddCircleOutline sx={{ color: "#24459C" }} />
              </IconButton>
            </Grid>
          </Grid>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <Grid container spacing={2}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <div className={classes.optionTitle}>Type of Shop</div>
              <div className={classes.optionSubtitle}>
                User Input’s Shop Type
              </div>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8}>
              <FormControl fullWidth>
                <TextField
                  select
                  id="demo-simple-select"
                  label="Shop Type"
                  size="small"
                >
                  {shopType.length != 0 ? (
                    shopType.map((type) => (
                      <MenuItem value={type}>{type}</MenuItem>
                    ))
                  ) : (
                    <MenuItem value="no shop type">Shop type</MenuItem>
                  )}
                </TextField>
              </FormControl>
            </Grid>

            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton
                onClick={() => {
                  setShopTypeOpen(true);
                }}
              >
                <AddCircleOutline sx={{ color: "#24459C" }} />
              </IconButton>
            </Grid>
          </Grid>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <Grid container spacing={2}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <div className={classes.optionTitle}>Type of Washing Machine</div>
              <div className={classes.optionSubtitle}>
                User Input Washing Machine Type
              </div>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8}>
              <FormControl fullWidth>
                <TextField
                  select
                  id="demo-simple-select"
                  label="Washing Machine Type"
                  size="small"
                >
                  {washingMachineType.length != 0 ? (
                    washingMachineType.map((washingMachine) => (
                      <MenuItem value={washingMachine}>
                        {washingMachine}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="no washing machine">
                      Washing Machine Type
                    </MenuItem>
                  )}
                </TextField>
              </FormControl>
            </Grid>

            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton
                onClick={() => {
                  setWashingMachineTypeOpen(true);
                }}
              >
                <AddCircleOutline sx={{ color: "#24459C" }} />
              </IconButton>
            </Grid>
          </Grid>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <Grid container spacing={2}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <div className={classes.optionTitle}>
                Non Connected Machine Type
              </div>
              <div className={classes.optionSubtitle}>
                User Input Non Connected Machine Type
              </div>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8}>
              <FormControl fullWidth>
                <TextField
                  select
                  id="demo-simple-select"
                  label="Non Connected Machine Type"
                  size="small"
                >
                  {nonConnectedMachineType.length != 0 ? (
                    nonConnectedMachineType.map((nonConnectedMachine) => (
                      <MenuItem value={nonConnectedMachine}>
                        {nonConnectedMachine}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="no non connected machine">
                      Non Connected Machine Type
                    </MenuItem>
                  )}
                </TextField>
              </FormControl>
            </Grid>

            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton
                onClick={() => {
                  setNonConnectedMachineTypeOpen(true);
                }}
              >
                <AddCircleOutline sx={{ color: "#24459C" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: "40px",
              gap: "8px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                padding: "4px 40px",
                background: "#F6F6F6",
                color: "#959596",
                borderRadius: "28px",
                fontWeight: "bold",
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                textTransform: "none",
                padding: "4px 40px",
                background: "#24459C",
                "&:hover": {
                  background: "#24459C",
                },
                color: "white",
                borderRadius: "28px",
                fontWeight: "bold",
              }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ControlPanelCustomerScreen;
