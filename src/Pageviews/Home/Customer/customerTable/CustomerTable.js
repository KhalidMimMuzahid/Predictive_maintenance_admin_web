import { DataGrid } from "@mui/x-data-grid";
import { Component, useContext, useEffect, useState } from "react";
import { columns } from "./constant";
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
  Typography,
} from "@mui/material";
import { AppContext } from "../../../../contextApi/appProvider";
import Loader from "../../../../Utils/Loader";
import { useGetAllCustomersQuery } from "../../../../features/customers/customersSlice";
import { Cancel, Search } from "@mui/icons-material";

const CustomerTable = ({ isRootCustomerPage, setIsRootCustomerPage }) => {
  const { setDownloadData } = useContext(AppContext);

  const [rows, setRows] = useState([]);

  const {
    data: customers,
    isLoading,
    isError,
    error,
  } = useGetAllCustomersQuery();

  const addNewItem = (customer, index) => {
    setRows((prev) => [
      ...prev,
      {
        id: index,
        name: customer,
        email: customer.email,
        location: customer,
        balance: customer.uid,
        details: customer,
      },
    ]);
  };

  const displayCustomers = () => {
    if (isLoading || isError)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Loader />
        </div>
      );

    return (
      <Box
        sx={{
          background: "white",
          borderRadius: "4px",
          marginTop: "8px",
          padding: "20px",
        }}
      >
        {isRootCustomerPage && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 20px",
            }}
          >
            <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
              Recent Customers
            </Typography>
            <Button
              sx={{
                color: "#24459C",
                textTransform: "none",
                fontWeight: "500",
              }}
              onClick={() => setIsRootCustomerPage(false)}
            >
              See All
            </Button>
          </Box>
        )}

        {isRootCustomerPage === false && (
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
                  <MenuItem value={"0-250 meters"}>0-250 meters</MenuItem>
                  <MenuItem value={"250-500 meters"}>250-500 meters</MenuItem>
                  <MenuItem value={"1 kilometer"}>1 kilometer</MenuItem>
                  <MenuItem value={""}>Select Area {">"}</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: "15%",
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
                  <MenuItem value={"Ongoing Jobs"}>Ongoing Jobs</MenuItem>
                  <MenuItem value={"Online"}>Online</MenuItem>
                  <MenuItem value={"Offline"}>Offline</MenuItem>
                  <MenuItem value={"Suspended"}>Suspended</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: "15%",
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
                  <MenuItem value={"Newest"}>Newest</MenuItem>
                  <MenuItem value={"Newest to Oldest"}>
                    Newest to Oldest
                  </MenuItem>
                  <MenuItem value={"Oldest to Newest"}>
                    Oldest to Newest
                  </MenuItem>
                  <MenuItem value={"Oldest"}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        )}
        <Box sx={{ marginTop: "10px" }}>
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
            rows={customers?.data?.map((data, id) => {
              return { ...data, id };
            })}
            columns={columns}
            rowHeight={61}
            // pageSize={5}
            // rowsPerPageOptions={5}
            // autoHeight
            checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
            onRowSelectionModelChange={(data, index) => {
              const selectedRowData = data?.map((index, i) => {
                return {
                  "SL No": i + 1,
                  _id: rows[index]?.details?._id,
                  name:
                    rows[index]?.details?.firstNameAlphabet +
                    " " +
                    rows[index]?.details?.lastNameAlphabet,
                  email: rows[index]?.details?.email,
                  dob: rows[index]?.details?.dob,
                  gender: rows[index]?.details?.gender,
                  phone: rows[index]?.details?.phone,
                  occupation: rows[index]?.details?.occupation,
                  address:
                    rows[index]?.details?.streetAddress +
                    " " +
                    rows[index]?.details?.cityAddress,
                  postalCode: rows[index]?.details?.postalCode,
                  uid: rows[index]?.details?.uid,
                  stripeCustomerId: rows[index]?.details?.stripeCustomerId,
                  uniqueNumberId: rows[index]?.details?.uniqueNumberId,
                  updatedAt: rows[index]?.details?.updatedAt,
                };
              });
              setDownloadData({
                selectedRowData,
                fileName: "Customer Details",
              });
            }}
          />
        </Box>
      </Box>
    );
  };

  return <div style={{ overflow: "auto" }}>{displayCustomers()}</div>;
};

export default CustomerTable;
