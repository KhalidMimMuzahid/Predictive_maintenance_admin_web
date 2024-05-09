import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import GroupTable from "./GroupTable";

const AllGroup = () => {
  const [tabValue, setTabValue] = useState("group");
  return (
    <Box sx={{ padding: "40px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Invoice
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography>Reservation Group / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              All Group
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs aria-label="basic tabs example">
            <Tab label="Groups" sx={{ color: "#24459C", fontWeight: "400" }} />
          </Tabs>
        </Box>
        <GroupTable />
      </Box>
    </Box>
  );
};

export default AllGroup;
