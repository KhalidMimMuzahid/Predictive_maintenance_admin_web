import { GroupOutlined } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AllReservationTable from "./allReservationTable/AllReservationTable";
import { usePostReservationGroupMutation } from "../../../../../features/reservation/reservationSlice";

const AcceptedRequest = () => {
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
            <Typography>Sensor Connected / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Accepted Request{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab sx={{ fontWeight: "600" }} label="Reservations" />
            </Tabs>
          </Box>
          <AllReservationTable
            setSelectedReservations={setSelectedReservations}
          />
        </Box>
      </div>
    </Box>
  );
};

export default AcceptedRequest;
