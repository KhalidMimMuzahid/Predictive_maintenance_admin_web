import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Name from "./Name";
import Message from "./Message/Message";

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
      <Name chat={chat} group={group} users={users} isSuccess={isSuccess} />
      <Message
        chat={chat?._id}
        users={users}
        lastMessage={lastMessage}
        lastMessageIsSuccess={lastMessageIsSuccess}
      />
    </Box>
  );
};

export default NameAndMessage;
