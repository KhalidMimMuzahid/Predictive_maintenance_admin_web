import { Cancel, Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useGetAllCustomersQuery } from "../../../../../features/customers/customersSlice";
import { columns } from "./constant";
import Loader from "../../../../../Utils/Loader";

const CustomerTable = () => {
  const {
    data: customers,
    isLoading,
    isError,
    error,
  } = useGetAllCustomersQuery();
  console.log(customers?.data[0]);
  return (
    <Box>
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
              m: 1,
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Area</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              //   value={provider}
              label="Area"
              //   onChange={handleChange}
            >
              <MenuItem value={"0-250 meters"}>0-250 meters</MenuItem>
              <MenuItem value={"250-500 meters"}>250-500 meters</MenuItem>
              <MenuItem value={"1 kilometer"}>1 kilometer</MenuItem>
              <MenuItem value={""}>Select Area {">"}</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              //   value={provider}
              label="Status"
              //   onChange={handleChange}
            >
              <MenuItem value={"Ongoing Jobs"}>Ongoing Jobs</MenuItem>
              <MenuItem value={"Online"}>Online</MenuItem>
              <MenuItem value={"Offline"}>Offline</MenuItem>
              <MenuItem value={"Suspended"}>Suspended</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Newest</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              //   value={provider}
              label="Newest"
              //   onChange={handleChange}
            >
              <MenuItem value={"Newest"}>Newest</MenuItem>
              <MenuItem value={"Newest to Oldest"}>Newest to Oldest</MenuItem>
              <MenuItem value={"Oldest to Newest"}>Oldest to Newest</MenuItem>
              <MenuItem value={"Oldest"}>Oldest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      {isLoading && <Loader />}
      {customers?.data?.length > 0 ? (
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
            "& .MuiDataGrid-virtualScroller": {
              overflow: "scroll",
            },
          }}
          rows={customers?.data?.map((data, id) => {
            return { ...data, id };
          })}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          scroll
        />
      ) : (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "600",
            color: "#FF4858",
          }}
        >
          No Customers To Show.
        </Box>
      )}
    </Box>
  );
};

export default CustomerTable;
