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
              borderRadius: "0px",
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                fontWeight: 1000,
                borderRadius: "0",
                borderTop: "1px solid #D9D9D9",
                background: "#F4F2FF",
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
