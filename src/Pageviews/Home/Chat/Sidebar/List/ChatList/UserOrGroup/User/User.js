import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile/Profile";
import NameAndMessage from "./NameAndMessage/NameAndMessage";
import LastMessageTime from "./LastMessageTime/LastMessageTime";

const User = ({ chat, users, isSuccess, lastMessage }) => {
  return (
    <Button
      sx={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: "24px",
        textTransform: "none",
      }}
    >
      <Profile users={users} isSuccess={isSuccess} />
      <NameAndMessage
        chat={chat?._id}
        group={chat?.group}
        users={users}
        isSuccess={isSuccess}
        lastMessage={lastMessage}
      />
      <LastMessageTime lastMessage={lastMessage} />
    </Button>
  );
};

export default User;
