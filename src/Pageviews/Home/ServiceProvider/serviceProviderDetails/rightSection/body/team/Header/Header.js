import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Button, Tab } from "@mui/material";
import React, { useState } from "react";

const Header = ({ addMemberOpen, setAddMemberOpen }) => {
  const [value, setValue] = useState("support_engineer");
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
              aria-label="lab API tabs example"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="All" value="all" />
              <Tab label="Support Engineer" value="support_engineer" />
              <Tab label="Others" value="others" />
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
