import { TabContext, TabList } from "@material-ui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";

const Header = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              label="Personal Info"
              value="personal_info"
              sx={{ textTransform: "none", fontWeight: "600" }}
            />
            <Tab
              label="Address"
              value="address"
              sx={{ textTransform: "none", fontWeight: "600" }}
            />
            <Tab
              label="Bank Info"
              value="bank_info"
              sx={{ textTransform: "none", fontWeight: "600" }}
            />
            <Tab
              label="Account Setting"
              value="account_setting"
              sx={{ textTransform: "none", fontWeight: "600" }}
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Header;
