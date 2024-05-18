import { MoreHoriz } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import FirstGraph from "../../Dashboard/RequestVsTimeGraph/component/FirstGraph";

const ComparisonChart = () => {
  const [provider, setProvider] = useState("");
  return (
    <Box
      sx={{
        background: "white",
        padding: "20px",
        borderRadius: "4px",
        margin: "40px 0 20px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          flexWrap: "wrap",
        }}
      >
        <p style={{ color: "#000000", fontSize: "24px", fontWeight: "400" }}>
          Comparison
        </p>
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
              <InputLabel id="demo-select-small-label">KPI 1 </InputLabel>
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
              <InputLabel id="demo-select-small-label">KPI 2 </InputLabel>
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
              <InputLabel id="demo-select-small-label">KPI 3 </InputLabel>
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
          <Button>
            <MoreHoriz />
          </Button>
        </div>
      </Box>
      <hr style={{ bgColor: "#E6EFF5", opacity: "25%" }} />
      <FirstGraph />
    </Box>
  );
};

export default ComparisonChart;
