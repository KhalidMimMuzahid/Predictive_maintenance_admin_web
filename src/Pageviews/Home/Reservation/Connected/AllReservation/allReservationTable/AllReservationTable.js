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
import { CheckBoxOutlineBlank, MoreHoriz } from "@mui/icons-material";

const AllReservationTable = ({
  isRootReservationPage,
  setIsRootReservationPage,
  allReservationRows,
  selectedReservations,
  setSelectedReservations,
  handleGroupReservation,
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
      {selectedReservations?.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#DEE5F7",
            padding: "4px 8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <CheckBoxOutlineBlank />
            <Typography
              sx={{ fontSize: "12px", fontWeight: "600", color: "#6E6893" }}
            >
              {selectedReservations?.length + " "} Selected
            </Typography>
          </Box>
          <Button
            disabled={!selectedReservations?.length}
            onClick={handleGroupReservation}
            sx={{
              border: "1px solid #24459C",
              borderRadius: "20px",
              color: "#24459C",
              fontWeight: "600",
              padding: "2px 16px",
              textTransform: "none",
            }}
          >
            Create Group
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
          rowsPerPageOptions={[10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
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
