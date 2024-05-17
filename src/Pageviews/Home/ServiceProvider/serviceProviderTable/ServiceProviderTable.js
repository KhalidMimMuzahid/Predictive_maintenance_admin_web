import {
  Add,
  Cancel,
  Download,
  MoreVert,
  Search,
  Upload,
} from "@mui/icons-material";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { columns } from "./component/constant";
import { StyledMenu, useStyle } from "../../Customer/styleComponents";
import { AppContext } from "../../../../contextApi/appProvider";
import { downloadTableData } from "../../../../Utils/downloadTableData";

const ServiceProviderTable = () => {
  const { downloadData, setDownloadData } = useContext(AppContext);
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const [serviceProviders, setServiceProviders] = useState([]);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/admin/service-provider/get-all-service-provider`,
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
        if (data?.success) {
          setServiceProviders(data?.data);
        } else {
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={classes.holder}>
      <div className={classes.topHolder}>
        <div>
          <div className={classes.title}>Vendor</div>
          <div className={classes.spacerSmall}></div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "black" }} className={classes.subtitle}>
              Dashboard /{" "}
            </div>
            <div style={{ color: "black" }} className={classes.subtitle}>
              Vendor /{" "}
            </div>
            <div style={{ color: "#24459c" }} className={classes.subtitle}>
              {" "}
              All Vendor
            </div>
          </div>
        </div>

        <div className={classes.buttonHolder}>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            startIcon={<Upload />}
          >
            Import
          </Button>
          <div className={classes.spacerSmall} />
          <Button
            onClick={() => downloadTableData(downloadData, setDownloadData)}
            style={{ backgroundColor: "white", color: "black" }}
            startIcon={<Download />}
          >
            Export
          </Button>
          <div className={classes.spacerSmall} />
          <Button style={{ backgroundColor: "#24459c", color: "white" }}>
            Add Customer
          </Button>
        </div>

        <div className={classes.smallMenuHolder}>
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
              }}
            >
              <Upload style={{ color: "#313E6A" }} />
              <div className={classes.spacerSmall} />
              Import
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Download style={{ color: "#313E6A" }} />
              <div className={classes.spacerSmall} />
              Export
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Add style={{ color: "#313E6A" }} />
              <div className={classes.spacerSmall} />
              Add Vendor
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <div className={classes.spacerSmall}></div>
      <div className={classes.spacerSmall}></div>

      <Box sx={{ background: "#FFFFFF", padding: "20px", borderRadius: "4px" }}>
        <Box>
          <TextField
            sx={{ width: "100%" }}
            size="small"
            placeholder="Search..."
            // value={searchText}
            // onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                  // onClick={() => {
                  //   setSearchText("");
                  //   setSmallSearchOpen(false);
                  // }}
                  >
                    <Cancel />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              background: "#FAF8F8",
              padding: "12px 48px",
              display: "flex",
              gap: "0px 12px",
            }}
          >
            <FormControl
              sx={{
                width: "12%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Area</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={""}>0-250 meters</MenuItem>
                <MenuItem value={""}>250-500 meters</MenuItem>
                <MenuItem value={""}>1 kilometer</MenuItem>
                <MenuItem value={""}>Select Area {">"}</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                width: "12%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={""}>Ongoing Jobs</MenuItem>
                <MenuItem value={""}>Online</MenuItem>
                <MenuItem value={""}>Offline</MenuItem>
                <MenuItem value={""}>Suspended</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                width: "12%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Newest</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={""}>Newest</MenuItem>
                <MenuItem value={""}>Newest to Oldest</MenuItem>
                <MenuItem value={""}>Oldest to Newest</MenuItem>
                <MenuItem value={""}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <DataGrid
            sx={{
              "& .table-header": {
                backgroundColor: "#F4F2FF",
              },
            }}
            rows={serviceProviders?.map((data, id) => {
              return { ...data, id };
            })}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>

      {/* Service Provider End 2nd Page */}
    </div>
  );
};

export default ServiceProviderTable;

// const useStyle = makeStyles((theme) => ({
//   holder: {
//     padding: theme.spacing(2),
//   },
//   title: {
//     color: "black",
//     fontWeight: "700",
//     fontSize: 24,
//   },
//   subtitle: {
//     fontWeight: "600",
//     fontSize: 14,
//   },
//   spacerSmall: {
//     width: "10px",
//     height: "10px",
//   },
//   topHolder: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   tableHolder: {
//     width: "100%",
//     backgroundColor: "white",
//   },
//   buttonHolder: {
//     display: "flex",
//     [theme.breakpoints.down("sm")]: {
//       display: "none",
//     },
//   },
//   smallMenuHolder: {
//     display: "none",
//     [theme.breakpoints.down("sm")]: {
//       display: "flex",
//     },
//   },
// }));

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "right",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette,
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "4px 0",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//     },
//   },
// }));

// class VendorTable extends Component {
//   state = {
//     vendors: [],
//   };

//   componentDidMount = () => {
//     this.getVendors();
//   };

//   getVendors() {
//     fetch("https://api.showaapp.com/admin/vendor/get-all-vendor", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({ vendors: data });
//       });
//   }

//   displayVendors = (vendors) => {
//     if (vendors.length === 0)
//       return (
//         <div
//           style={{ width: "100%", display: "flex", justifyContent: "center" }}
//         >
//           <h3>No vendor in the server</h3>
//         </div>
//       );

//     return vendors.map((vendor, index) => (
//       <VendorTab key={index} email={vendor.email} />
//     ));
//   };

//   render() {
//     return (
//       <div style={{ overflow: "auto" }}>
//         {this.displayVendors(this.state.vendors)}
//       </div>
//     );
//   }
// }

// const VendorTab = (props) => {
//   const classes = useStyle();

//   return <div>{props.email}</div>;
// };

// // import React, { useEffect, useState } from "react";

// // const ServiceProviderTable = () => {
// //   const [serviceProviders, setServiceProviders] = useState([]);
// //   useEffect(() => {
// //     fetch(
// //       `${process.env.REACT_APP_BASE_URL}/admin/service-provider/get-all-service-provider`,
// //       {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     )
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data?.success) {
// //           setServiceProviders(data?.data);
// //         } else {
// //         }
// //       })
// //       .catch((err) => {});
// //   }, []);
// //   return <div>ServiceProviderTable test: {serviceProviders?.length}</div>;
// // };

// // export default ServiceProviderTable;
