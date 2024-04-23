import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import React from "react";
import OrdersAndCompletedGraph from "./OrdersAndCompletedGraph";

const Comparison = () => {
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
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
                //   value={provider}
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
                //   value={provider}
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
                //   value={provider}
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
            <MoreHorizIcon />
          </Button>
        </div>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <OrdersAndCompletedGraph />
    </Box>
  );
};

export default Comparison;
