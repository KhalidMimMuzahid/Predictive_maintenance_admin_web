import { AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import AddStatusModal from "./modal/AddStatusModal";
import AddRadiusModal from "./modal/AddRadiusModal";
import AddAreaModal from "./modal/AddAreaModal";
import AddIssueModal from "./modal/AddIssueModal";

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

const ReservationRequest = () => {
  const classes = useStyle();
  const [addStatusModal, setAddStatusModal] = useState(false);
  const [addRadiusModal, setAddRadiusModal] = useState(false);
  const [addAreaModal, setAddAreaModal] = useState(false);
  const [addIssueModal, setAddIssueModal] = useState(false);

  return (
    <>
      {addStatusModal && (
        <AddStatusModal
          addStatusModal={addStatusModal}
          setAddStatusModal={setAddStatusModal}
        />
      )}
      {addRadiusModal && (
        <AddRadiusModal
          addRadiusModal={addRadiusModal}
          setAddRadiusModal={setAddRadiusModal}
        />
      )}
      {addAreaModal && (
        <AddAreaModal
          addAreaModal={addAreaModal}
          setAddAreaModal={setAddAreaModal}
        />
      )}
      {addIssueModal && (
        <AddIssueModal
          addIssueModal={addIssueModal}
          setAddIssueModal={setAddIssueModal}
        />
      )}

      <Box sx={{ padding: "40px" }}>
        <div className={classes.topHolder}>
          <div>
            <div className={classes.title}>Control Panel</div>
            <div className={classes.spacerSmall}></div>
            <div style={{ display: "flex" }}>
              <div
                style={{ color: "black", marginRight: "4px" }}
                className={classes.subtitle}
              >
                Dashboard /{" "}
              </div>
              <div
                style={{ color: "black", marginRight: "4px" }}
                className={classes.subtitle}
              >
                Control Panel /{" "}
              </div>
              <div style={{ color: "#24459c" }} className={classes.subtitle}>
                {" "}
                Reservation Request
              </div>
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>Status</div>
                <div className={classes.optionSubtitle}>
                  Vendor status on request
                </div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select Status"
                    //   onChange={(e) => setSelectedBrand(e?.target?.value)}
                  >
                    <MenuItem>Online</MenuItem>
                    <MenuItem>Offline</MenuItem>
                    <MenuItem>Pending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    setAddStatusModal(!addStatusModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>Nearest Location</div>
                <div className={classes.optionSubtitle}>
                  Nearest location of vendor on request
                </div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Nearest Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select Nearest Location"
                    //   onChange={(e) => setSelectedBrand(e?.target?.value)}
                  >
                    <MenuItem>0-5 km</MenuItem>
                    <MenuItem>6-15 km</MenuItem>
                    <MenuItem>16-30 km</MenuItem>
                    <MenuItem>30+ km</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    setAddRadiusModal(!addRadiusModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>Area</div>
                <div className={classes.optionSubtitle}>
                  Area of vendor on request
                </div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select Status"
                    //   onChange={(e) => setSelectedBrand(e?.target?.value)}
                  >
                    <MenuItem>Mirpur 10</MenuItem>
                    <MenuItem>Gulshan</MenuItem>
                    <MenuItem>Motijheel</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    setAddAreaModal(!addAreaModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>Issues</div>
                <div className={classes.optionSubtitle}>Issues of Request</div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Issue
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select Issue"
                    //   onChange={(e) => setSelectedBrand(e?.target?.value)}
                  >
                    <MenuItem>Sensor Problem</MenuItem>
                    <MenuItem>Module Error</MenuItem>
                    <MenuItem>Data Generation</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    setAddIssueModal(!addIssueModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          </Box>
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

export default ReservationRequest;
