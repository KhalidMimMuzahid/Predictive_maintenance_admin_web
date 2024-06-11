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
        <AllReservationTable
          allReservationRows={allReservationRows}
          setSelectedReservations={setSelectedReservations}
        />
      </Box>
    </Box>
  );
};

export default AllReservation;
