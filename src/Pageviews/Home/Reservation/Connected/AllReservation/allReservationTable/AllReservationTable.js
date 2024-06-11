import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../component/allReservationTableComponent/allReservationTableConstant";
import { MoreHoriz } from "@mui/icons-material";

const AllReservationTable = ({
  isRootReservationPage,
  setIsRootReservationPage,
  setSelectedReservations,
  allReservationRows,
}) => {
  const [provider, setProvider] = useState("");
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      {isRootReservationPage ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box
              sx={{
                width: "18px",
                height: "18px",
                borderRadius: "2px",
                background: "#26C1C9",
              }}
            />
            <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
              Recent Service Providers
            </Typography>
          </Box>
          <Button
            sx={{
              textTransform: "none",
              color: "#24459C",
              fontWeight: "500",
            }}
            onClick={() => setIsRootReservationPage(false)}
          >
            See All
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            padding: "12px 48px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "0px 12px",
          }}
        >
          <FormControl
            sx={{
              width: "12%",
              boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">All Providers</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={age}
              label="All Providers"
              // onChange={handleChange}
            >
              <MenuItem value={"0-250 meters"}>Ongoing</MenuItem>
              <MenuItem value={"250-500 meters"}>Online</MenuItem>
              <MenuItem value={"1 kilometer"}>Offline</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "15%",
              boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">All Services</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={age}
              label="All Services"
              // onChange={handleChange}
            >
              <MenuItem value={"Ongoing Jobs"}>Dish Washing Machine</MenuItem>
              <MenuItem value={"Online"}>Pallet Washing Machine</MenuItem>
              <MenuItem value={"Offline"}>Container Washing Machine</MenuItem>
              <MenuItem value={"Suspended"}>General Device</MenuItem>
              <MenuItem value={"Suspended"}>All Service</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "15%",
              boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">
              Jan 01 - Jan 31
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={age}
              label="Jan 01 - Jan 31"
              // onChange={handleChange}
            >
              <MenuItem value={"Newest"}>Last One Week</MenuItem>
              <MenuItem value={"Newest to Oldest"}>Last Two Week</MenuItem>
              <MenuItem value={"Oldest to Newest"}>Last One Month</MenuItem>
              <MenuItem value={"Oldest"}>Last One Year</MenuItem>
              <MenuItem value={"Select Date"}>Select Date</MenuItem>
            </Select>
          </FormControl>
          <Button>
            <MoreHoriz />
          </Button>
        </Box>
      )}
      {allReservationRows?.data?.length > 0 && (
        <DataGrid
          sx={{
            background: "white",
            borderRadius: "0px",
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              fontWeight: 1000,
              borderRadius: "0",
              borderTop: "1px solid #D9D9D9",
              background: "#F4F2FF",
            },
          }}
          rows={allReservationRows?.data?.map((data, id) => {
            return { ...data, id };
          })}
          columns={columns}
          autoHeight
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[15]}
          initialState={{
            pagination: { paginationModel: { pageSize: 15 } },
          }}
          pageSizeOptions={[15, 25, 50]}
          disableRowSelectionOnClick
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map(
              (index, i) => allReservationRows?.data[index]?._id
            );
            setSelectedReservations(selectedRowData);
          }}
        />
      )}
    </Box>
  );
};

export default AllReservationTable;
