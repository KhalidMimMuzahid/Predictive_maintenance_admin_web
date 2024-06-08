import {
  CheckBoxOutlineBlank,
  GroupOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import AllReservationTable from "./allReservationTable/AllReservationTable";

const OnGoingNonConnected = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedReservations, setSelectedReservations] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    // Header
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
            <Typography>Reservation / </Typography>
            <Typography>Sensor Non-Connected / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Ongoing Maintenance{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          borderRadius: "4px",
          padding: "0 20px",
          marginTop: "8px",
        }}
      >
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
              id="demo-simple-select"
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
              id="demo-simple-select"
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
              id="demo-simple-select"
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
        <AllReservationTable
          setSelectedReservations={setSelectedReservations}
        />
      </Box>
    </Box>
  );
};

export default OnGoingNonConnected;
