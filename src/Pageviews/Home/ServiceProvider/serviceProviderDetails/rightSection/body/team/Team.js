import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import Header from "./Header/Header";
import { Cancel, Search } from "@mui/icons-material";
import TeamTable from "./teamTable/TeamTable";

const Team = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      <Header />
      <Box sx={{ padding: "28px 0px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            size="medium"
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
                  <IconButton // onClick={() => {
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
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Sort By
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value="last_update"
              label="Sort By"
              onChange={handleChange}
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="last_update">Last Update</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* Team Table */}
        <TeamTable />
      </Box>
    </Box>
  );
};

export default Team;
