import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Button, Tab } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = ({ addMemberOpen, setAddMemberOpen, value, setValue }) => {
  const { width, breakpoint } = useSelector((state) => state.browser);

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
              <Tab
                label="All"
                value="all"
                sx={{ fontSize: breakpoint === "lg" ? "10px" : "14px" }}
              />
              <Tab
                label="Admin"
                value="admin"
                sx={{ fontSize: breakpoint === "lg" ? "10px" : "14px" }}
              />
              <Tab
                label="Sub-Admin"
                value="sub_admin"
                sx={{ fontSize: breakpoint === "lg" ? "10px" : "14px" }}
              />
              <Tab
                label="Branch Manager"
                value="branch_manager"
                sx={{ fontSize: breakpoint === "lg" ? "10px" : "14px" }}
              />
              <Tab
                label="Engineers"
                value="engineers"
                sx={{ fontSize: breakpoint === "lg" ? "10px" : "14px" }}
              />
            </TabList>
          </Box>
        </TabContext>
        <Button
          className="add_member"
          sx={{
            padding: breakpoint === "lg" ? "4px 24px" : "6px 36px",
            backgroundColor: "#24459c",
            color: "white",
            textTransform: "none",
            borderRadius: "8px",
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
