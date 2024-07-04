import { CalendarMonth } from "@mui/icons-material";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const SalesReports = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
        >
          Sales Reports
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            marginTop: "36px",
          }}
        >
          <Typography sx={{ color: "#868DAA" }}>Showing for:</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <CalendarMonth sx={{ color: "#868DAA" }} />
            <Select
              size="small"
              sx={{ outline: "none", border: "none" }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={"May 20 - May 29 2024"}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem
                value={"May 20 - May 29 2024"}
                sx={{ color: "#868DAA" }}
              >
                May 20 - May 29 2024
              </MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 16, 20, 22, 25] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 3, 5, 8, 11, 9],
          },
        ]}
        height={300}
        width={750}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </Box>
  );
};

export default SalesReports;
