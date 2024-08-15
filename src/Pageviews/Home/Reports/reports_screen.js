import { Cancel, Download, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ReportsTable from "./ReportsTable/ReportsTable";
import { useState } from "react";
import ImportReport from "./components/modal/ImportReport";
import NewReport from "./components/modal/NewReport";
import SelectDateModal from "./components/modal/SelectDateModal";

const ReportScreen = () => {
  const [importReportModal, setImportReportModal] = useState(false);
  const [newReport, setNewReport] = useState(false);
  const [selectDateModal, setSelectDateModal] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState({});
  return (
    <Box sx={{ padding: "40px" }}>
      {importReportModal && (
        <ImportReport
          importReportModal={importReportModal}
          setImportReportModal={setImportReportModal}
        />
      )}
      {newReport && (
        <NewReport newReport={newReport} setNewReport={setNewReport} />
      )}
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
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Reports
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Reports
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "14px" }}>
          <Button
            onClick={() => setImportReportModal(!importReportModal)}
            sx={{
              backgroundColor: "white",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "0px 32px",
              height: "34px",
              fontWeight: "600",
            }}
            startIcon={<Download />}
          >
            Import
          </Button>
          <Button
            onClick={() => setNewReport(!newReport)}
            sx={{
              backgroundColor: "#24459C",
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              padding: "0px 32px",
              height: "34px",
              fontWeight: "600",
            }}
          >
            New Report
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          padding: "20px",
          marginTop: "28px",
          gap: "16px",
          borderRadius: "8px",
        }}
      >
        <Box>
          <TextField
            sx={{ width: "100%" }}
            size="small"
            placeholder="Search Reports..."
            // value={searchText}
            // onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                  // onClick={() => {
                  //   setSearchText("");
                  //   setSmallSearchOpen(false);
                  // }}
                  >
                    <Cancel />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              background: "#FAF8F8",
              padding: "12px 48px",
              display: "flex",
              gap: "0px 12px",
            }}
          >
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
                Last One Year
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                //   value={provider}
                label="Last One Year"
                //   onChange={handleChange}
              >
                <MenuItem value={"Last One Week"}>Last One Week</MenuItem>
                <MenuItem value={"Last One Month"}>Last One Month</MenuItem>
                <MenuItem value={"Last One Year"}>Last One Year</MenuItem>
                <MenuItem value={"Select Date"}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#585858",
                      padding: "0px",
                    }}
                    onClick={() => setSelectDateModal(!selectDateModal)}
                  >
                    Select Date
                  </Button>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                minWidth: 180,
                backgroundColor: "white",
                borderRadius: "10px",
              }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Newest</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                //   value={provider}
                label="Newest"
                //   onChange={handleChange}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Newest to Oldest"}>Newest to Oldest</MenuItem>
                <MenuItem value={"Oldest to Newest"}>Oldest to Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <ReportsTable />
      </Box>
    </Box>
  );
};

export default ReportScreen;
