import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const AllReservation = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    // Header
    <div>
      <div>
        <div>
          <div>Reservation</div>
          <div></div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "black" }}>
              Dashboard / Reservation/ Sensor Connected/{" "}
            </div>
            <div style={{ color: "#24459c" }}>All Reservation Request</div>
          </div>
        </div>
      </div>

      <div></div>
      <div></div>

      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Reservations" />
              <Tab label="Groups" />
            </Tabs>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default AllReservation;
