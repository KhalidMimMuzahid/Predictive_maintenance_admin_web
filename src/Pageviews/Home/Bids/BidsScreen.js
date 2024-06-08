import { MoreHoriz } from "@mui/icons-material";
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
import Overview from "./LandingPage/Overview/Overview";
import RequestVsTimeGraph from "./LandingPage/RequestVsTimeGraph/RequestVsTimeGraph";
import AllGroupTable from "./Table/AllGroupTable/AllGroupTable";
import { useGetAllResGroupsQuery } from "../../../features/resGroup/resGroupSlice";

const BidsScreen = () => {
  const [isBidsRootScreen, setIsBidsRootScreen] = useState(true);
  const [provider, setProvider] = useState("");
  const { data: resGroupData, isLoading } = useGetAllResGroupsQuery({
    groupForMachineType: "connected",
    reservationGroupType: "all",
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
            Bids
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Bids
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">
                  All Providers
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={provider}
                  label="All Providers"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Ongoing</MenuItem>
                  <MenuItem value={20}>Online</MenuItem>
                  <MenuItem value={30}>Offline</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">
                  All Departments
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={provider}
                  label="All Departments"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Ongoing</MenuItem>
                  <MenuItem value={20}>Online</MenuItem>
                  <MenuItem value={30}>Offline</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Jan - Dec</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={provider}
                  label="Jan - Dec"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Jan - March</MenuItem>
                  <MenuItem value={20}>March - September</MenuItem>
                  <MenuItem value={30}>October - November</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button>
              <MoreHoriz />
            </Button>
          </div>
        </Box>
      </Box>
      {isBidsRootScreen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
          }}
        >
          <Overview />
          <RequestVsTimeGraph />
        </Box>
      )}
      <Box sx={{ marginTop: "24px" }}>
        <AllGroupTable
          isBidsRootScreen={isBidsRootScreen}
          setIsBidsRootScreen={setIsBidsRootScreen}
          resGroupData={resGroupData}
        />
      </Box>
    </Box>
  );
};

export default BidsScreen;
