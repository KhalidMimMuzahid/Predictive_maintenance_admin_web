import { DataGrid } from "@mui/x-data-grid";
import { Component, useContext, useEffect, useState } from "react";
import { columns } from "./constant";
<<<<<<< HEAD
import { Box } from "@mui/material";
import { AppContext } from "../../../../contextApi/appProvider";
=======
import { Box, TextField, InputAdornment, FormControl, InputLabel, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
>>>>>>> 580a6ea2d14fcc34505f0c63f991b73a5a9c9a29

const CustomerTable = () => {
  const { setDownloadData } = useContext(AppContext);

  const [rows, setRows] = useState([]);

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
  useEffect(() => {
    fetch("https://api.showaapp.com/admin/customer/get-all-customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log({ data });
        data.map((customer, index) => addNewItem(customer, index));
      });
  }, []);

  const displayCustomers = () => {
    if (rows?.length === 0)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No customer in the server</h3>
        </div>
      );



    return (
<<<<<<< HEAD
      <Box sx={{ background: "white", borderRadius: "4px", marginTop: "8px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={61}
          // pageSize={5}
          // rowsPerPageOptions={5}
          // autoHeight
          checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map((index, i) => {
              console.log("From CSV", rows[index]);
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
            setDownloadData({ selectedRowData, fileName: "Customer Details" });
          }}
        />
      </Box>
=======
      <div>

        <Box sx={{ background: "white", borderRadius: "4px", marginTop: "8px", paddingTop: "10px" }}>
          <TextField
            placeholder="Search Customer"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            style={{ margineTop: "20px", background: "white", width: "100%", margineBottom: "20px" }}
          />

          <Box sx={{ maxWidth: 720, marginRight: "10px", marginTop: "20px", marginLeft:"30px", marginBottom: "20px", display: "flex", gap: "20px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">All</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Newest</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Jan 1 - Jan 31</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
               
              </Select>
            </FormControl>
          </Box>


          <DataGrid
            rows={this.state.rows}
            columns={columns}
            rowHeight={61}
          // pageSize={5}
          // rowsPerPageOptions={5}
          // autoHeight
          // checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
          />
        </Box>
      </div>
>>>>>>> 580a6ea2d14fcc34505f0c63f991b73a5a9c9a29
    );
  };

  return <div style={{ overflow: "auto" }}>{displayCustomers()}</div>;
};

export default CustomerTable;
