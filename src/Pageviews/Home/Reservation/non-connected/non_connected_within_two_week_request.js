import {
  Close,
  Delete,
  Equalizer,
  Group,
  Money,
  MoreVert,
  Person,
  Stop,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Snackbar,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Component, Fragment, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";

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
    width: "100%",
    backgroundColor: "white",
  },
  buttonHolder: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smallMenuHolder: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },

  pendingContainer: {
    border: "1px solid #FFA503",
    borderRadius: "25px",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "#FFA503",
    fontSize: "10px",
    fontWeight: "bolder",
  },

  ongoingContainer: {
    border: "1px solid #71C9FF",
    borderRadius: "25px",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "#26C1C9",
    fontSize: "10px",
    fontWeight: "bolder",
  },

  acceptedContainer: {
    border: "1px solid #2FD573",
    borderRadius: "25px",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "#2FD573",
    fontSize: "10px",
    fontWeight: "bolder",
  },

  cenceledContainer: {
    border: "1px solid #FF4858",
    borderRadius: "25px",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "#FF4858",
    fontSize: "10px",
    fontWeight: "bolder",
  },

  completedContainer: {
    border: "1px solid #2FD573",
    borderRadius: "25px",
    backgroundColor: "#2FD573",
    padding: "8px 16px",
    color: "white",
    fontSize: "10px",
    fontWeight: "bolder",
  },

  ongoingBidContainer: {
    border: "1px solid red",
    borderRadius: "25px",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "red",
    fontSize: "10px",
    fontWeight: "bolder",
  },

  closedBidContainer: {
    border: "1px solid green",
    borderRadius: "25px",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "green",
    fontSize: "10px",
    fontWeight: "bolder",
  },

  addUserContainer: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    width: "400px",
    height: "450px",
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
    borderRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
    },
  },

  mapModalContainer: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    width: "400px",
    height: "450px",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    overflowY: "scroll",
    borderRadius: "15px",
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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const NonConnectedWithinTwoWeekRequest = () => {
  const classes = useStyle();

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.holder}>
      <div className={classes.topHolder}>
        <div>
          <div className={classes.title}>Reservation</div>
          <div className={classes.spacerSmall}></div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "black" }} className={classes.subtitle}>
              Dashboard / Reservation/ Sensor Non-Connected/{" "}
            </div>
            <div style={{ color: "#24459c" }} className={classes.subtitle}>
              Ongoing Maintenance
            </div>
          </div>
        </div>
      </div>

      <div className={classes.spacerSmall}></div>
      <div className={classes.spacerSmall}></div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Reservations" {...a11yProps(0)} />
              <Tab label="Groups" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={tabValue} index={0}>
            <AllReservationTable />
          </CustomTabPanel>
          <CustomTabPanel value={tabValue} index={1}>
            <AllGroupTable />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default NonConnectedWithinTwoWeekRequest;

const columns = [
  {
    field: "customer_name",
    headerName: "CUSTOMER NAME",
    renderCell: (props) => CustomerNamePhoneComponent(props),
    flex: 1,
  },
  {
    field: "reservation_id",
    headerName: "REQUEST ID",
    flex: 1,
  },
  {
    field: "status",
    headerName: "STATUS",
    renderCell: (props) => StatusComponent(props),
    flex: 1,
  },
  {
    field: "schedule",
    headerName: "SCHEDULE",
    flex: 1,
  },
  {
    field: "service_type",
    headerName: "SERVICE TYPE",
    renderCell: (props) => ServiceTypeComponent(props),
    flex: 1,
  },
  {
    field: "location",
    headerName: "LOCATION",
    renderCell: (props) => LocationComponent(props),
    flex: 1,
  },
  {
    field: "issues",
    headerName: "ISSUES",
    renderCell: (props) => IssuesComponent(props),
    flex: 1,
  },
  {
    field: "bidStatus",
    headerName: "BID STATUS",
    renderCell: (props) => BidStatusComponent(props),
    flex: 1,
  },
  {
    field: "assign",
    headerName: "ASSIGN",
    renderCell: (props) => AssignVendorComponent(props),
    flex: 1,
  },
  {
    field: "action",
    headerName: "ACTION",
    renderCell: (props) => ActionComponent(props),
  },
];

class AllReservationTable extends Component {
  state = {
    allReservationRows: [],
    selectedRows: [],
    schedule: "",
  };

  componentDidMount = () => {
    this.getAllConnectedResrvtaion();
  };

  async getAllConnectedResrvtaion() {
    await fetch(
      "https://api.showaapp.com/admin/reservation/get-all-reservation",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((reservation, index) => this.addNewItem(reservation, index));
      });
  }

  addNewItem = (reservation, index) => {
    let { allReservationRows } = this.state;
    allReservationRows.push({
      id: index,
      customer_name: reservation.uid,
      reservation_id: reservation._id,
      status: reservation.status,
      schedule: reservation.reservationSchedule,
      service_type: reservation.washingMachineId,
      location: reservation.washingMachineId,
      invoice: reservation,
      issues: reservation,
      bidStatus: reservation.bidStatus,
      assign: reservation,
      action: reservation,
    });
    this.setState({ allReservationRows: allReservationRows });
  };

  onRowsSelectionHandler = (ids) => {
    if (this.state.selectedRows.length == 0) {
      this.setState({ schedule: "" });
    }

    var tempRows = new Array();

    ids.map((id) => {
      this.state.allReservationRows.find((row) => {
        if (row.id.toString() === id.toString()) {
          tempRows.push(row);
        }
      });
    });
    this.setState({ selectedRows: tempRows });
  };

  displayReservations() {
    if (this.state.allReservationRows.length === 0)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No reservations in the server</h3>
        </div>
      );

    return (
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <DataGrid
          rows={this.state.allReservationRows}
          columns={columns}
          autoHeight
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[5]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          isRowSelectable={(params) =>
            params.row.assign.assignedVendorId === "" &&
            params.row.schedule != "On-Demand" &&
            params.row.bidStatus == "" &&
            (this.state.schedule == "" ||
              params.row.reservationSchedule == this.state.schedule)
          }
          onRowSelectionModelChange={(ids) => {
            this.onRowsSelectionHandler(ids);
          }}
        />
      </div>
    );
  }

  makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  addReservationGroup(gid) {
    var reservations = new Array();

    this.state.selectedRows.map((row) => {
      reservations.push({
        id: row.issues._id,
        uid: row.customer_name,
        assignedVendorId: "",
        washingMachineId: row.service_type,
        date: row.issues.date,
        time: row.issues.time,
        reservationSchedule: row.issues.reservationSchedule,
        status: "Pending",
        problems: row.issues.problems,
        imageAddresses: row.issues.imageAddresses,
      });
    });

    axios
      .post(
        "https://api.showaapp.com/admin/reservation/create-reservation-group",
        { reservations: reservations, groupId: gid }
      )
      .then((response) => {
        console.log(response.data);
        window.location.href = "/reservation/connected/all";
      })
      .catch((error) => {
        console.error("Error sending data to the server:", error);
      });
  }

  displaySelectedReservations() {
    if (this.state.selectedRows.length === 0) return <div />;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
          width: "100%",
        }}
      >
        <div
          style={{
            borderRadius: "7px",
            color: "white",
            backgroundColor: "#24459c",
            padding: "8px 16px",
            margin: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (this.state.selectedRows.length < 2) {
              alert(
                "There is only one reservation selected. Please select at least 2 reservation to create a group."
              );
            } else {
              let groupId = this.makeid(16);

              // this.state.selectedRows.map(async (row, index) => {
              //     setTimeout(() => {
              //         this.addReservationtoGroup(row, groupId);
              //         console.log('Added : ' + (index+1));
              //     }, 1000);
              // })

              this.addReservationGroup(groupId);
            }
          }}
        >
          Add Group
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ overflow: "auto" }}>
        {this.displayReservations()}
        {this.displaySelectedReservations()}
      </div>
    );
  }
}

const CustomerNamePhoneComponent = (props) => {
  const [customer, setCustomer] = useState(null);

  const classes = useStyle();

  useEffect(() => {
    getCustomer(props.value);
  }, []);

  function getCustomer(uid) {
    if (uid != "") {
      let url =
        "https://api.showaapp.com/admin/wallet/find-user-with-id/" + uid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCustomer(data);
        });
    }
  }

  function displayCustomer() {
    if (customer == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    return (
      <div className={classes.customerInfoHolder}>
        <div className={classes.customerName}>
          {customer.firstNameAlphabet + " " + customer.lastNameAlphabet}
        </div>
        <div className={classes.customerEmail}>{customer.phone}</div>
      </div>
    );
  }

  return <div>{displayCustomer()}</div>;
};

const StatusComponent = (props) => {
  const classes = useStyle();

  return (
    <div
      className={
        props.value == "Pending"
          ? classes.pendingContainer
          : props.value == "Ongoing"
          ? classes.ongoingContainer
          : props.value == "Accepted"
          ? classes.acceptedContainer
          : props.value == "Canceled"
          ? classes.cenceledContainer
          : props.value == "Completed"
          ? classes.completedContainer
          : classes.pendingContainer
      }
    >
      {props.value}
    </div>
  );
};

const BidStatusComponent = (props) => {
  const classes = useStyle();

  return (
    <div
      className={
        props.value == "Ongoing"
          ? classes.ongoingBidContainer
          : props.value == "Closed"
          ? classes.closedBidContainer
          : classes.spacerSmall
      }
    >
      {props.value}
    </div>
  );
};

const ServiceTypeComponent = (props) => {
  const [washingMachine, setWashingMachine] = useState(null);

  useEffect(() => {
    getWashingMachine(props.value);
  }, []);

  function getWashingMachine(wid) {
    if (wid != "") {
      let url =
        "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setWashingMachine(data);
        });
    }
  }

  function displayWashingMachine() {
    if (washingMachine == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    return (
      <div style={{ color: "#24459C", fontSize: "10px" }}>
        {washingMachine.typeOfWashingMachine}
      </div>
    );
  }

  return <div>{displayWashingMachine()}</div>;
};

const LocationComponent = (props) => {
  const [washingMachine, setWashingMachine] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const [mapAdds, setMapAdds] = useState("");

  const classes = useStyle();

  useEffect(() => {
    getWashingMachine(props.value);
  }, []);

  function getLatLong(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        setMapAdds(
          "https://maps.google.com/maps?q=" +
            latLng.lat +
            "," +
            latLng.lng +
            "&h1=es;&output=embed"
        );
        setShowLocationModal(true);
      })
      .catch((error) => console.error("Error", error));
  }

  function getWashingMachine(wid) {
    if (wid != "") {
      let url =
        "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setWashingMachine(data);
        });
    }
  }

  function displayLocation() {
    if (washingMachine == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    return (
      <div
        style={{
          color: "#24459C",
          backgroundColor: "#DEE5F7",
          cursor: "pointer",
          padding: "8px 16px",
          borderRadius: "25px",
          fontSize: "10px",
        }}
        onClick={(e) => {
          console.log(washingMachine.address);
          getLatLong(washingMachine.address);
        }}
      >
        View Location
      </div>
    );
  }

  return (
    <div>
      <Modal open={showLocationModal}>
        <Container className={classes.mapModalContainer}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ color: "#24459c", fontSize: "24px", fontWeight: "700" }}
            >
              Show Location
            </Typography>

            <IconButton
              style={{ right: "10" }}
              onClick={() => setShowLocationModal(false)}
            >
              <Close />
            </IconButton>
          </div>

          <div style={{ position: "relative", height: "90%", zIndex: 2 }}>
            <iframe
              src={mapAdds}
              style={{ height: "100%", width: "100%" }}
            ></iframe>
          </div>
        </Container>
      </Modal>
      {displayLocation()}
    </div>
  );
};

const issueColumns = [
  {
    field: "id",
    headerName: "Ser",
  },
  {
    field: "issue",
    headerName: "Issue",
    flex: 1,
  },
];
const IssuesComponent = (props) => {
  const classes = useStyle();

  const [issueModal, setIssueModal] = useState(false);

  const [issueRows, setIssueRows] = useState([]);

  useEffect(() => {
    var tempRows = new Array();
    props.value.problems.map((issue, index) =>
      tempRows.push({ id: index + 1, issue: issue })
    );
    setIssueRows(tempRows);
  }, []);

  function displayPhotos() {
    if (props.value.imageAddresses.length === 0) {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No picture uploaded to the server</h3>
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "#F6F6F6",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <div style={{ color: "#C7CCD8", fontSize: "12px" }}>Attachments</div>
          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridRowGap: "10px",
              gridColumnGap: "10px",
            }}
          >
            {props.value.imageAddresses.map((imageAddress, index) => {
              return (
                <div style={{ width: "200px", height: "200px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={imageAddress}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }

  function displayIssues() {
    if (issueRows.length === 0)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No issues listed in the server</h3>
        </div>
      );

    return (
      <>
        <DataGrid
          rows={issueRows}
          columns={issueColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableRowSelectionOnClick
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          autoHeight
        />
      </>
    );
  }

  return (
    <div>
      <Modal open={issueModal}>
        <Container className={classes.addUserContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Close />
            </div>
            <Typography
              style={{ fontSize: "24px", fontWeight: "700", color: "#24459c" }}
            >
              Issue List
            </Typography>
            <div
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                setIssueModal(false);
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

          <div style={{ overflow: "auto" }}>{displayIssues()}</div>

          <div>
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
          </div>

          <div style={{ overflow: "auto" }}>{displayPhotos()}</div>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />
        </Container>
      </Modal>

      <div
        style={{
          backgroundColor: "#F3FAE7",
          color: "#7FC008",
          fontSize: "10px",
          fontWeight: "bolder",
          padding: "8px 16px",
          borderRadius: "25px",
          cursor: "pointer",
        }}
        onClick={() => {
          setIssueModal(true);
        }}
      >
        View Issue List
      </div>
    </div>
  );
};

const vendorColumns = [
  {
    field: "id",
    headerName: "Ser",
  },
  {
    field: "vendor_name",
    headerName: "VENDOR NAME",
    flex: 1,
    renderCell: (props) => VendorNameComponent(props),
  },
  {
    field: "location",
    headerName: "LOCATION",
    flex: 1,
    renderCell: (props) => VendorLocationComponent(props),
  },
  {
    field: "action",
    headerName: "",
    renderCell: (props) => VendorActionComponent(props),
  },
];
const VendorNameComponent = (props) => {
  return <div>{props.value.companyBasicInfo.companyName}</div>;
};
const VendorLocationComponent = (props) => {
  const [address, setAddress] = useState("");
  const [mapLink, setMapLink] = useState("");

  const [showLocaitonModal, setShowLoactionModal] = useState(false);

  const classes = useStyle();

  function displayLocation() {
    return (
      <>
        <div
          style={{
            color: "#24459C",
            backgroundColor: "#DEE5F7",
            cursor: "pointer",
            padding: "8px 16px",
            fontSize: "10px",
            borderRadius: "25px",
          }}
          onClick={(e) => {
            setAddress(
              props.value.companyBasicInfo.address.streetAddress +
                ", " +
                props.value.companyBasicInfo.address.cityAddress +
                ", " +
                props.value.companyBasicInfo.address.prefecture +
                " - " +
                props.value.companyBasicInfo.address.postalCode
            );
            getLatLong(address);
          }}
        >
          View Location
        </div>
      </>
    );
  }

  function getLatLong(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        setMapLink(
          "https://maps.google.com/maps?q=" +
            latLng.lat +
            "," +
            latLng.lng +
            "&h1=es;&output=embed"
        );
        setShowLoactionModal(true);
      })
      .catch((error) => console.error("Error", error));
  }

  return (
    <div>
      <Modal open={showLocaitonModal}>
        <Container className={classes.mapModalContainer}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ color: "#24459c", fontSize: "24px", fontWeight: "700" }}
            >
              Show Location
            </Typography>

            <IconButton
              style={{ right: "10" }}
              onClick={() => setShowLoactionModal(false)}
            >
              <Close />
            </IconButton>
          </div>

          <div style={{ position: "relative", height: "90%", zIndex: 2 }}>
            <iframe
              src={mapLink}
              style={{ height: "100%", width: "100%" }}
            ></iframe>
          </div>
        </Container>
      </Modal>

      {displayLocation()}
    </div>
  );
};
const VendorActionComponent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyle();

  function assignVendor() {
    fetch(
      "https://api.showaapp.com/admin/reservation/assign-vendor/" +
        props.value.reservation._id +
        "/" +
        props.value.vendor.uid,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Successfully assigned vendor to this reservation");
        window.location.href = "/reservation/connected/all";
      });
  }

  return (
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
            assignVendor();
            handleClose();
          }}
        >
          <Group style={{ color: "#313E6A" }} />
          <div className={classes.spacerSmall} />
          Assign Vendor
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
const AssignVendorComponent = (props) => {
  const classes = useStyle();

  const [openVendorModal, setOpenVendorModal] = useState(false);
  const [openVendorListModal, setOpenVendorListModal] = useState(false);

  const [vendorRows, setVendorRows] = useState([]);
  const [selectedVendorRows, setSelectedVendorRows] = useState([]);

  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    if (props.value.assignedVendorId == "") {
      getAllServiceProviders();
    } else {
      getServiceProviderWithId();
    }
  }, []);

  function getAllServiceProviders() {
    fetch(
      "https://api.showaapp.com/admin/service-provider/get-all-service-provider",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        var tempRows = new Array();
        data.map((vendor, index) =>
          // addNewItem(request, index)
          tempRows.push({
            id: index + 1,
            vendor_name: vendor,
            location: vendor,
            action: { vendor: vendor, reservation: props.value },
          })
        );
        setVendorRows(tempRows);
      });
  }

  function getServiceProviderWithId() {
    fetch(
      "https://api.showaapp.com/admin/service-provider/get-service-provider-with-id/" +
        props.value.assignedVendorId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setVendor(data);
      });
  }

  if (props.value.assignedVendorId == "") {
    function displayVendors() {
      if (vendorRows.length === 0)
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <h3>No Service Provider in the server</h3>
          </div>
        );

      return (
        <>
          <DataGrid
            rows={vendorRows}
            columns={vendorColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableRowSelectionOnClick
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
            autoHeight
          />
        </>
      );
    }

    return (
      <>
        <Modal open={openVendorListModal}>
          <Container className={classes.addUserContainer}>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <Close />
              </div>
              <Typography
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#24459c",
                }}
              >
                Assign a Vendor
              </Typography>
              <div
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => {
                  setOpenVendorListModal(false);
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

            <div style={{ overflow: "auto" }}>{displayVendors()}</div>

            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />

            {/* <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                                <div 
                                    className={classes.cancelButton}
                                    onClick={(e)=>{
                                        setOpenVendorListModal(false);
                                    }}
                                >
                                    Cancel
                                </div>
                                <div className={classes.spacerSmall} />
                                <div 
                                    className={classes.saveButton}
                                    onClick={(e)=>{
                                        assignVendor();
                                    }}
                                >
                                    Assign Vendor
                                </div>
                            </div> */}
          </Container>
        </Modal>
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#D9E3FF",
            color: "#24459c",
            fontSize: "10px",
            padding: "8px 16px",
            borderRadius: "25px",
          }}
          onClick={() => {
            setOpenVendorListModal(true);
          }}
        >
          Assign Vendor
        </div>
      </>
    );
  } else {
    function displayVendor() {
      if (vendor == null)
        return (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <h3>Please Wait</h3>
          </div>
        );

      return (
        <div
          style={{
            backgroundColor: "#EFF9F8",
            color: "#14B8A6",
            fontSize: "10px",
            padding: "8px 16px",
            borderRadius: "25px",
          }}
        >
          {vendor.companyBasicInfo.companyName}
        </div>
      );
    }

    return <div>{displayVendor()}</div>;
  }
};

const ActionComponent = (props) => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function deleteReservation() {
    fetch(
      "https://api.showaapp.com/admin/reservation/delete-reservation/" +
        props.value._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Reservation deleted successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  function sendForBidding() {
    fetch(
      "https://api.showaapp.com/admin/reservation/send-for-bidding/" +
        props.value._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Sent for bidding successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  function closeBidding() {
    fetch(
      "https://api.showaapp.com/admin/reservation/close-bidding/" +
        props.value._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Bidding closed successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  return (
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
            deleteReservation();
            handleClose();
          }}
        >
          <Delete style={{ color: "red" }} />
          <div className={classes.spacerSmall} />
          Delete Reservation
        </MenuItem>

        {props.value.bidStatus === "" && (
          <MenuItem
            onClick={() => {
              sendForBidding();
              handleClose();
            }}
          >
            <Equalizer style={{ color: "pink" }} />
            <div className={classes.spacerSmall} />
            Send for Bidding
          </MenuItem>
        )}

        {props.value.bidStatus === "Ongoing" && (
          <MenuItem
            onClick={() => {
              closeBidding();
              handleClose();
            }}
          >
            <Stop style={{ color: "purple" }} />
            <div className={classes.spacerSmall} />
            Close Bidding
          </MenuItem>
        )}
      </StyledMenu>
    </div>
  );
};

const groupColumns = [
  {
    name: "GROUP ID",
    selector: (row) => row.groupId,
  },
  {
    name: "STATUS",
    selector: (row) => row.status,
    cell: (row) => GroupStatusComponent(row.status),
  },
  {
    name: "ASSIGN",
    selector: (row) => row.assign,
    cell: (row) => GroupAssignVendorComponent(row.assign),
  },
  {
    name: "BID STATUS",
    selector: (row) => row.bidStatus,
    cell: (row) => GroupBidStatusComponent(row.bidStatus),
  },
  {
    name: "",
    selector: (row) => row.action,
    cell: (row) => GroupActionComponent(row.action),
  },
];

const vendorGroupColumns = [
  {
    field: "id",
    headerName: "Ser",
  },
  {
    field: "vendor_name",
    headerName: "VENDOR NAME",
    flex: 1,
    renderCell: (props) => VendorNameComponent(props),
  },
  {
    field: "location",
    headerName: "LOCATION",
    flex: 1,
    renderCell: (props) => VendorLocationComponent(props),
  },
  {
    field: "action",
    headerName: "",
    renderCell: (props) => VendorGroupActionComponent(props),
  },
];
const VendorGroupActionComponent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyle();

  function assignVendor() {
    fetch(
      "https://api.showaapp.com/admin/reservation/assign-vendor-to-group/" +
        props.value.group.groupId +
        "/" +
        props.value.vendor.uid,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Successfully assigned vendor to this group");
        window.location.href = "/reservation/connected/all";
      });
  }

  return (
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
            assignVendor();
            handleClose();
          }}
        >
          <Group style={{ color: "#313E6A" }} />
          <div className={classes.spacerSmall} />
          Assign Vendor
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

const GroupBidStatusComponent = (props) => {
  const classes = useStyle();

  return (
    <div
      className={
        props == "Ongoing"
          ? classes.ongoingBidContainer
          : props == "Closed"
          ? classes.closedBidContainer
          : classes.spacerSmall
      }
    >
      {props}
    </div>
  );
};

const GroupAssignVendorComponent = (props) => {
  const classes = useStyle();

  const [openVendorModal, setOpenVendorModal] = useState(false);
  const [openVendorListModal, setOpenVendorListModal] = useState(false);

  const [vendorRows, setVendorRows] = useState([]);

  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    if (props.assignedVendorId == "") {
      getAllServiceProviders();
    } else {
      getServiceProviderWithId();
    }
  }, []);

  function getAllServiceProviders() {
    fetch(
      "https://api.showaapp.com/admin/service-provider/get-all-service-provider",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        var tempRows = new Array();
        data.map((vendor, index) =>
          tempRows.push({
            id: index + 1,
            vendor_name: vendor,
            location: vendor,
            action: { vendor: vendor, group: props.value },
          })
        );
        setVendorRows(tempRows);
      });
  }

  function getServiceProviderWithId() {
    fetch(
      "https://api.showaapp.com/admin/service-provider/get-service-provider-with-id/" +
        props.assignedVendorId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setVendor(data);
      });
  }

  if (props.assignedVendorId == "") {
    function displayVendors() {
      if (vendorRows.length === 0)
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <h3>No Service Provider in the server</h3>
          </div>
        );

      return (
        <>
          <DataGrid
            rows={vendorRows}
            columns={vendorGroupColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableRowSelectionOnClick
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
            autoHeight
          />
        </>
      );
    }

    return (
      <>
        <Modal open={openVendorListModal}>
          <Container className={classes.addUserContainer}>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <Close />
              </div>
              <Typography
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#24459c",
                }}
              >
                Assign a Vendor
              </Typography>
              <div
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => {
                  setOpenVendorListModal(false);
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

            <div style={{ overflow: "auto" }}>{displayVendors()}</div>

            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
          </Container>
        </Modal>
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#D9E3FF",
            color: "#24459c",
            fontSize: "10px",
            padding: "8px 16px",
            borderRadius: "25px",
          }}
          onClick={() => {
            setOpenVendorListModal(true);
          }}
        >
          Assign Vendor
        </div>
      </>
    );
  } else {
    function displayVendor() {
      if (vendor == null)
        return (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <h3>Please Wait</h3>
          </div>
        );

      return (
        <div
          style={{
            backgroundColor: "#EFF9F8",
            color: "#14B8A6",
            fontSize: "10px",
            padding: "8px 16px",
            borderRadius: "25px",
          }}
        >
          {vendor.companyBasicInfo.companyName}
        </div>
      );
    }

    return <div>{displayVendor()}</div>;
  }
};

const GroupActionComponent = (props) => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function deleteGroup() {
    fetch(
      "https://api.showaapp.com/admin/reservation/delete-group/" +
        props.groupId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Group deleted successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  function sendForBidding() {
    fetch(
      "https://api.showaapp.com/admin/reservation/send-group-for-bidding/" +
        props.groupId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Sent for bidding successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  function closeBidding() {
    fetch(
      "https://api.showaapp.com/admin/reservation/close-bidding-for-group/" +
        props.groupId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Bidding closed successfully");
        window.location.href = "/reservation/connected/all";
      });
  }

  return (
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
            deleteGroup();
            handleClose();
          }}
        >
          <Delete style={{ color: "red" }} />
          <div className={classes.spacerSmall} />
          Delete Reservation
        </MenuItem>

        {props.status == "Pending" && props.bidStatus === "" && (
          <MenuItem
            onClick={() => {
              sendForBidding();
              handleClose();
            }}
          >
            <Equalizer style={{ color: "pink" }} />
            <div className={classes.spacerSmall} />
            Send for Bidding
          </MenuItem>
        )}

        {props.status == "Pending" && props.bidStatus === "Ongoing" && (
          <MenuItem
            onClick={() => {
              closeBidding();
              handleClose();
            }}
          >
            <Stop style={{ color: "purple" }} />
            <div className={classes.spacerSmall} />
            Close Bidding
          </MenuItem>
        )}
      </StyledMenu>
    </div>
  );
};

const GroupStatusComponent = (props) => {
  const classes = useStyle();

  return (
    <div
      className={
        props == "Pending"
          ? classes.pendingContainer
          : props == "Ongoing"
          ? classes.ongoingContainer
          : props == "Accepted"
          ? classes.acceptedContainer
          : props == "Canceled"
          ? classes.cenceledContainer
          : props == "Completed"
          ? classes.completedContainer
          : classes.pendingContainer
      }
    >
      {props}
    </div>
  );
};

class AllGroupTable extends Component {
  state = {
    allReservationGroups: [],
  };

  componentDidMount = () => {
    this.getAllConnectedResrvtaionGroups();
  };

  async getAllConnectedResrvtaionGroups() {
    await fetch(
      "https://api.showaapp.com/admin/reservation/get-all-connected-reservation-groups",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((group, index) => this.addNewItem(group, index));
        console.log(this.state.allReservationGroups);
      });
  }

  addNewItem = (group, index) => {
    let { allReservationGroups } = this.state;
    allReservationGroups.push({
      id: index,
      groupId: group.groupId,
      status: group.status,
      assign: group,
      bidStatus: group.bidStatus,
      action: group,
    });
    this.setState({ allReservationGroups: allReservationGroups });
  };

  displayGroups() {
    if (this.state.allReservationGroups.length === 0)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No group in the server</h3>
        </div>
      );

    return (
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <DataTable
          columns={groupColumns}
          data={this.state.allReservationGroups}
          pagination
          expandableRows
          expandableRowsComponent={ExpandedResrevationGroup}
        />
      </div>
    );
  }

  render() {
    return <div>{this.displayGroups()}</div>;
  }
}

const ExpandableGroupColumns = [
  {
    name: "#",
    width: "4rem",
    style: {
      fontWeight: "700",
    },
    cell: (row, index) => index + 1, //RDT provides index by default
  },
  {
    name: "CUSTOMER NAME",
    selector: (row) => row.uid,
    cell: (row) => ExpandedCustomerNamePhoneComponent(row.uid),
  },
  {
    name: "SCHEDULE",
    selector: (row) => row.reservationSchedule,
  },
  {
    name: "SERVICE TYPE",
    selector: (row) => row.washingMachineId,
    cell: (row) => ExpandedServiceTypeComponent(row.washingMachineId),
  },
  {
    name: "LOCATION",
    selector: (row) => row.washingMachineId,
    cell: (row) => ExpandedLocationComponent(row.washingMachineId),
  },
  {
    name: "ISSUES",
    selector: (row) => row.problems,
    cell: (row) =>
      ExpandedIssuesComponent({
        problems: row.problems,
        imageAddresses: row.imageAddresses,
      }),
  },
];

const ExpandedCustomerNamePhoneComponent = (props) => {
  const [customer, setCustomer] = useState(null);

  const classes = useStyle();

  useEffect(() => {
    getCustomer(props);
  }, []);

  function getCustomer(uid) {
    if (uid != "") {
      let url =
        "https://api.showaapp.com/admin/wallet/find-user-with-id/" + uid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCustomer(data);
        });
    }
  }

  function displayCustomer() {
    if (customer == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    return (
      <div className={classes.customerInfoHolder}>
        <div className={classes.customerName}>
          {customer.firstNameAlphabet + " " + customer.lastNameAlphabet}
        </div>
        <div className={classes.customerEmail}>{customer.phone}</div>
      </div>
    );
  }

  return <div>{displayCustomer()}</div>;
};

const ExpandedServiceTypeComponent = (props) => {
  const [washingMachine, setWashingMachine] = useState(null);

  useEffect(() => {
    getWashingMachine(props);
  }, []);

  function getWashingMachine(wid) {
    if (wid != "") {
      let url =
        "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setWashingMachine(data);
        });
    }
  }

  function displayWashingMachine() {
    if (washingMachine == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    return (
      <div style={{ color: "#24459C", fontSize: "10px" }}>
        {washingMachine.typeOfWashingMachine}
      </div>
    );
  }

  return <div>{displayWashingMachine()}</div>;
};

const ExpandedLocationComponent = (props) => {
  const [washingMachine, setWashingMachine] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const [mapAdds, setMapAdds] = useState("");

  const classes = useStyle();

  useEffect(() => {
    getWashingMachine(props);
  }, []);

  function getLatLong(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        setMapAdds(
          "https://maps.google.com/maps?q=" +
            latLng.lat +
            "," +
            latLng.lng +
            "&h1=es;&output=embed"
        );
        setShowLocationModal(true);
      })
      .catch((error) => console.error("Error", error));
  }

  function getWashingMachine(wid) {
    if (wid != "") {
      let url =
        "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setWashingMachine(data);
        });
    }
  }

  function displayLocation() {
    if (washingMachine == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    return (
      <div
        style={{
          color: "#24459C",
          backgroundColor: "#DEE5F7",
          cursor: "pointer",
          padding: "8px 16px",
          borderRadius: "25px",
          fontSize: "10px",
        }}
        onClick={(e) => {
          console.log(washingMachine.address);
          getLatLong(washingMachine.address);
        }}
      >
        View Location
      </div>
    );
  }

  return (
    <div>
      <Modal open={showLocationModal}>
        <Container className={classes.mapModalContainer}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ color: "#24459c", fontSize: "24px", fontWeight: "700" }}
            >
              Show Location
            </Typography>

            <IconButton
              style={{ right: "10" }}
              onClick={() => setShowLocationModal(false)}
            >
              <Close />
            </IconButton>
          </div>

          <div style={{ position: "relative", height: "90%", zIndex: 2 }}>
            <iframe
              src={mapAdds}
              style={{ height: "100%", width: "100%" }}
            ></iframe>
          </div>
        </Container>
      </Modal>
      {displayLocation()}
    </div>
  );
};

const ExpandedIssuesComponent = (props) => {
  const classes = useStyle();

  const [issueModal, setIssueModal] = useState(false);

  const [issueRows, setIssueRows] = useState([]);

  useEffect(() => {
    var tempRows = new Array();
    props.problems.map((issue, index) =>
      tempRows.push({ id: index + 1, issue: issue })
    );
    setIssueRows(tempRows);
  }, []);

  function displayPhotos() {
    if (props.imageAddresses.length === 0) {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h4>No pictures uploaded to the server</h4>
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "#F6F6F6",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <div style={{ color: "#C7CCD8", fontSize: "12px" }}>Attachments</div>
          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridRowGap: "10px",
              gridColumnGap: "10px",
            }}
          >
            {props.imageAddresses.map((imageAddress, index) => {
              return (
                <div style={{ width: "200px", height: "200px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={imageAddress}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }

  function displayIssues() {
    if (issueRows.length === 0)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No issues listed in the server</h3>
        </div>
      );

    return (
      <>
        <DataGrid
          rows={issueRows}
          columns={issueColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableRowSelectionOnClick
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          autoHeight
        />
      </>
    );
  }

  return (
    <div>
      <Modal open={issueModal}>
        <Container className={classes.addUserContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Close />
            </div>
            <Typography
              style={{ fontSize: "24px", fontWeight: "700", color: "#24459c" }}
            >
              Issue List
            </Typography>
            <div
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                setIssueModal(false);
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

          <div style={{ overflow: "auto" }}>{displayIssues()}</div>

          <div>
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
          </div>

          <div style={{ overflow: "auto" }}>{displayPhotos()}</div>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />
        </Container>
      </Modal>

      <div
        style={{
          backgroundColor: "#F3FAE7",
          color: "#7FC008",
          fontSize: "10px",
          fontWeight: "bolder",
          padding: "8px 16px",
          borderRadius: "25px",
          cursor: "pointer",
        }}
        onClick={() => {
          setIssueModal(true);
        }}
      >
        View Issue List
      </div>
    </div>
  );
};

const ExpandedResrevationGroup = ({ data }) => {
  return (
    <div>
      {/* {JSON.stringify(data.assign.reservations, null, 2)} */}

      <div style={{ width: "100%", backgroundColor: "white" }}>
        <DataTable
          columns={ExpandableGroupColumns}
          data={data.assign.reservations}
        />
      </div>
    </div>
  );
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));
