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
import { useState } from "react";
import AllReservationTable from "./allReservationTable/AllReservationTable";
import MakeGroupModal from "../../commonComponent/modal/MakeGroupModal";
import { useGetAllReservationQuery } from "../../../../../features/reservation/reservationSlice";

const AllReservation = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedReservations, setSelectedReservations] = useState([]);
  const [viewOpen, setViewOpen] = useState(false);
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
  const handleGroupReservation = () => {
    setViewOpen(true);
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    // Header
    <Box sx={{ padding: "40px" }}>
      <MakeGroupModal
        viewOpen={viewOpen}
        setViewOpen={setViewOpen}
        selectedReservations={selectedReservations}
        refetch={refetch}
      />
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
              All Reservation Request{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          borderRadius: "4px",
          marginTop: "8px",
        }}
      >
        <AllReservationTable
          allReservationRows={allReservationRows}
          setSelectedReservations={setSelectedReservations}
          selectedReservations={selectedReservations}
          handleGroupReservation={handleGroupReservation}
        />
      </Box>
    </Box>
  );
};

export default AllReservation;
