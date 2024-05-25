import { Cancel, Search, Upload } from "@mui/icons-material";
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
import TeamTable from "./TeamTable";

const TeamScreen = () => {
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
            Team
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Team
            </Typography>
          </Box>
        </Box>
        <Button
          // onClick={() => downloadTableData(downloadData, setDownloadData)}
          sx={{
            backgroundColor: "white",
            color: "#24459C",
            textTransform: "none",
            borderRadius: "8px",
            padding: "0px 32px",
            height: "34px",
            fontWeight: "600",
          }}
          startIcon={<Upload />}
        >
          Export
        </Button>
      </Box>
      <Box
        sx={{
          paddingY: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
          <TextField
            sx={{ width: "100%" }}
            size="small"
            placeholder="Search..."
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
              size="small"
              sx={{
                width: "12%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Area</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={""}>0-250 meters</MenuItem>
                <MenuItem value={""}>250-500 meters</MenuItem>
                <MenuItem value={""}>1 kilometer</MenuItem>
                <MenuItem value={""}>Select Area {">"}</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              size="small"
              sx={{
                width: "12%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={""}>Ongoing Jobs</MenuItem>
                <MenuItem value={""}>Online</MenuItem>
                <MenuItem value={""}>Offline</MenuItem>
                <MenuItem value={""}>Suspended</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              size="small"
              sx={{
                width: "12%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Newest</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={""}>Newest</MenuItem>
                <MenuItem value={""}>Newest to Oldest</MenuItem>
                <MenuItem value={""}>Oldest to Newest</MenuItem>
                <MenuItem value={""}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TeamTable />
        </Box>
      </Box>
    </Box>
  );
};

export default TeamScreen;
