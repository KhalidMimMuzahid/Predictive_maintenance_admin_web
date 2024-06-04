import React from "react";
import Topbar from "./Topbar";
import { Box } from "@mui/material";
import SendMessage from "./SendMessage";
import Messages from "./Messages/Messages";

const MainScreen = () => {
  return (
    <Box sx={{ width: "70%", position: "relative" }}>
      <Topbar />
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Messages />
      <SendMessage />
    </Box>
  );
};

export default MainScreen;
