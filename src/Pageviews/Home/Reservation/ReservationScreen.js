import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OverViewCards from "./commonComponent/OverViewCards";
import ComparisonChart from "./commonComponent/Comparison/ComparisonChart";
import AllReservationTable from "./Connected/AllReservation/allReservationTable/AllReservationTable";
import { useGetAllReservationQuery } from "../../../features/reservation/reservationSlice";

const ReservationScreen = () => {
  const [selectedReservations, setSelectedReservations] = useState([]);
  const [isRootReservationPage, setIsRootReservationPage] = useState(true);
  const {
    data: allReservationRows,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllReservationQuery({
    machineType: "connected",
    reservationType: "all",
  });
  return (
    <Box sx={{ padding: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Reservation
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Reservation
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button
            sx={{
              backgroundColor: "#24459c",
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              padding: "6px 32px",
              fontWeight: "500",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Washing Machine
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "6px 32px",
              fontWeight: "600",
            }}
          >
            General
          </Button>
        </Box>
      </Box>
      {isRootReservationPage && (
        <>
          {/* Overview */}
          <Box
            sx={{
              background: "white",
              padding: "20px",
              borderRadius: "4px",
              margin: "40px 0 20px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "24px" }}>Overview</Typography>
              <FormControl
                sx={{
                  width: "12%",
                  boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                  backgroundColor: "#24459c",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "8px",
                  fontWeight: "500",
                  "&:hover": {
                    background: "#24459C",
                  },
                }}
                size="small"
              >
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "white" }}
                >
                  Add Item
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Add Item"
                  sx={{ color: "white" }}
                  // onChange={handleChange}
                >
                  <MenuItem value={"All Departments"}>All Departments</MenuItem>
                  <MenuItem value={"Maintenance"}>Maintenance</MenuItem>
                  <MenuItem value={"Revenue"}>Revenue</MenuItem>
                  <MenuItem value={"Total Numbers"}>Total Numbers</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <OverViewCards />
          </Box>
          {/* Overview */}

          {/* Comparison Chart */}
          <ComparisonChart />
          {/* Comparison Chart */}
        </>
      )}

      {/* All Reservation Request Table */}
      <AllReservationTable
        allReservationRows={allReservationRows}
        setSelectedReservations={setSelectedReservations}
        isRootReservationPage={isRootReservationPage}
        setIsRootReservationPage={setIsRootReservationPage}
      />
      {/* All Reservation Request Table */}
    </Box>
  );
};

export default ReservationScreen;
