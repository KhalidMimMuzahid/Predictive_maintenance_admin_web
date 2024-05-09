import { GroupOutlined } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AllReservationTable from "./allReservationTable/AllReservationTable";
import { usePostReservationGroupMutation } from "../../../../../features/reservation/reservationSlice";

const ReSchedule = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedReservations, setSelectedReservations] = useState([]);

  const [makeReservationGroup, { data, isError, error, isLoading, isSuccess }] =
    usePostReservationGroupMutation();

  useEffect(() => {
    if (isSuccess & !isLoading) {
      alert(data?.message);
      // here we need to re fetch the data for all reservation group table
    }
    if (isError & !isLoading) {
      alert(error?.data?.message);
    }
  }, [isLoading]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleGroupReservation = () => {
    makeReservationGroup({ reservationRequests: selectedReservations });
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
              On Demand Request Request{" "}
            </Typography>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button
            disabled={!selectedReservations?.length}
            onClick={handleGroupReservation}
            sx={{
              background: "#24459C",
              color: "#E6E8EB",
              fontWeight: "600",
              padding: "6px 16px",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            <GroupOutlined sx={{ marginRight: "16px" }} />
            Group
          </Button>
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

export default ReSchedule;
