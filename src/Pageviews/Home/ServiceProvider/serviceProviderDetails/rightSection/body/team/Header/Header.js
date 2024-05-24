import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Button, Tab } from "@mui/material";
import React, { useState } from "react";

const Header = ({ addMemberOpen, setAddMemberOpen, value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="Service Provider Members"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="All" value="all" />
              <Tab label="Admin" value="admin" />
              <Tab label="Sub-Admin" value="sub_admin" />
              <Tab label="Branch Manager" value="branch_manager" />
              <Tab label="Engineers" value="engineers" />
            </TabList>
          </Box>
        </TabContext>
        <Button
          sx={{
            backgroundColor: "#24459c",
            color: "white",
            textTransform: "none",
            borderRadius: "8px",
            padding: "6px 32px",
            fontWeight: "500",
            "&:hover": {
              background: "#24459C",
            },
          }}
          onClick={() => {
            setAddMemberOpen(!addMemberOpen);
          }}
        >
          Add Member
        </Button>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default Header;
