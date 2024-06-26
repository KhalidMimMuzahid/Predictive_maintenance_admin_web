import { TabContext, TabList } from "@material-ui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const FeedSearchScreen = () => {
  const [value, setValue] = useState("all");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Box sx={{ background: "white" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="Service Provider Members"
              textColor="primary"
              indicatorColor="primary"
              sx={{ background: "white", padding: "0px 40px" }}
            >
              <Tab label="All" value="all" />
              <Tab label="Post" value="post" />
              <Tab label="People" value="people" />
              <Tab label="Maintenance" value="maintenance" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <LeftSide value={value} />
          <RightSide />
        </Box>
      </Box>
    </Box>
  );
};

export default FeedSearchScreen;
