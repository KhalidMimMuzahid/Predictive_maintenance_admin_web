import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AIModel from "./AIModel/AIModel";
import Threshold from "./Threshold/Threshold";
import SystemHealth from "./SystemHealth/SystemHealth";
import MachinePerformance from "./MachinePerformance/MachinePerformance";
import CustomerFeedback from "./CustomerFeedback/CustomerFeedback";

const AI = () => {
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
            Performance
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Good Day / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Admin
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <FormControl
            sx={{
              m: 1,
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Duration</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              // value={provider}
              label="Duration"
              // onChange={handleChange}
            >
              <MenuItem value={"January-February"}>January-February</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{ marginTop: "24px", display: "flex", gap: "24px", width: "100%" }}
      >
        <AIModel />
        <Threshold />
      </Box>
      <Box
        sx={{ marginTop: "40px", display: "flex", gap: "24px", width: "100%" }}
      >
        <SystemHealth />
        <MachinePerformance />
      </Box>
      <Box sx={{ marginTop: "40px", display: "flex", gap: "24px" }}>
        <CustomerFeedback />
      </Box>
    </Box>
  );
};

export default AI;
