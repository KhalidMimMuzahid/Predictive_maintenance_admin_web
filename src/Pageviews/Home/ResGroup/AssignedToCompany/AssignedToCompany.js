import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import GroupTable from "./GroupTable";

const AssignedToCompany = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Reservation Group
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography>Reservation Group / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Assigned To Company Group
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <GroupTable />
      </Box>
    </Box>
  );
};

export default AssignedToCompany;
