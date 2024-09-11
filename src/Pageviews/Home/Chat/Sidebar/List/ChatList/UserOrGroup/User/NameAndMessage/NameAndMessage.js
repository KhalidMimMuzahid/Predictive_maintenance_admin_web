import { Box, Typography } from "@mui/material";
import React from "react";
import Name from "./Name";
import Message from "./Message";

const NameAndMessage = ({
  chat,
  group,
  users,
  isSuccess,
  lastMessage,
  lastMessageIsSuccess,
}) => {
  return (
    <Box sx={{ width: "60%" }}>
      <Name chat={chat} users={users} isSuccess={isSuccess} />
      <Message
        chat={chat?._id}
        lastMessage={lastMessage}
        lastMessageIsSuccess={lastMessageIsSuccess}
      />
    </Box>
  );
};

export default NameAndMessage;
