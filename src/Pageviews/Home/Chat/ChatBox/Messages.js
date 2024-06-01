import { Box } from "@mui/material";
import React from "react";

const Messages = () => {
  const messages = {
    users: {
      admin: {
        name: "Showa Admin",
        photoUrl:
          "http://localhost:3000/static/media/logo_full.8c7699fff11ba88cef3220eddcf8250e.svg",
      },
      user: {},
    },
  };
  return <Box sx={{ padding: "0px 30px 0px 15px" }}>Messages</Box>;
};

export default Messages;
