import { Box, Typography } from "@mui/material";
import React from "react";
import Name from "./Name";
import Message from "./Message";

const NameAndMessage = ({ chat, group, users, isSuccess, lastMessage }) => {
  return (
    <Box sx={{ width: "90%" }}>
      <Name chat={chat} users={users} isSuccess={isSuccess} />
      <Message chat={chat?._id} lastMessage={lastMessage} />
    </Box>
  );
};

export default NameAndMessage;
