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
import SelectDateModal from "../modal/SelectDateModal";
import FirstGraph from "./Graph/FirstGraph";
import SecondGraph from "./Graph/SecondGraph";
import ThirdGraph from "./Graph/ThirdGraph";

const ComparisonChart = () => {
  const [provider, setProvider] = useState("");
  const [selectDateModal, setSelectDateModal] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState({});
  const [whichGraph, setWhichGraph] = useState("bar");
  return (
    <Box
      sx={{
        background: "white",
        padding: "20px",
        borderRadius: "4px",
        margin: "40px 0 20px 0",
      }}
    >
      {selectDateModal && (
        <SelectDateModal
          selectDateModal={selectDateModal}
          setSelectDateModal={setSelectDateModal}
          selectedDateRange={selectedDateRange}
          setSelectedDateRange={setSelectedDateRange}
        />
      )}
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
              <InputLabel id="demo-select-small-label">KPI 1</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={provider}
                label="KPI 1"
                //   onChange={handleChange}
              >
                <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                <MenuItem value={"online"}>Online</MenuItem>
                <MenuItem value={"offline"}>Offline</MenuItem>
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
                label="KPI 2"
                //   onChange={handleChange}
              >
                <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                <MenuItem value={"online"}>Online</MenuItem>
                <MenuItem value={"offline"}>Offline</MenuItem>
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
              <InputLabel id="demo-select-small-label">Duration</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={provider}
                label="Duration"
                //   onChange={handleChange}
              >
                <MenuItem>
                  <Button
                    onClick={() => setSelectDateModal(!selectDateModal)}
                    sx={{ width: "100%", textTransform: "none" }}
                  >
                    Select Date
                  </Button>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button>
            <MoreHoriz />
          </Button>
        </div>
      </Box>
      <hr style={{ bgColor: "#E6EFF5", opacity: "25%" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0 12px" }}>
            <Box
              sx={{
                width: "18px",
                height: "18px",
                background: "#81C926",
                borderRadius: "2px",
              }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#5A6872" }}
            >
              Orders
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0 12px",
              marginLeft: "20px",
            }}
          >
            <Box
              sx={{
                width: "18px",
                height: "18px",
                background: "#26C1C9",
                borderRadius: "2px",
              }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#5A6872" }}
            >
              Completed
            </Typography>
          </Box>
        </Box>
        <Box>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 220,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Style: Bar</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={style}
                  label="Style: Bar"
                  onChange={(e) => setWhichGraph(e?.target?.value)}
                >
                  <MenuItem value={"bar"}>Bar</MenuItem>
                  <MenuItem value={"line"}>Line</MenuItem>
                  <MenuItem value={"pie"}>Pie</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#24459C",
                  minWidth: 180,
                }}
                variant="contained"
              >
                Download
              </Button>
            </div>
          </div>
        </Box>
      </Box>

      {whichGraph === "bar" && <FirstGraph />}
      {whichGraph === "line" && <SecondGraph />}
      {whichGraph === "pie" && <ThirdGraph />}
    </Box>
  );
};

export default ComparisonChart;
