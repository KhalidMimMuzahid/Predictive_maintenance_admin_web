import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import NameAndMessage from "./NameAndMessage/NameAndMessage";
import LastMessageTime from "./LastMessageTime/LastMessageTime";

const Group = ({
  chat,
  users,
  isSuccess,
  lastMessageIsSuccess,
  lastMessage,
}) => {
  // console.log(chat);
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
      <Profile groupPhotoUrl={chat?.group?.groupPhotoUrl} users={users} />
      <NameAndMessage
        chat={chat?._id}
        group={chat?.group}
        users={users}
        isSuccess={isSuccess}
        lastMessage={lastMessage}
        lastMessageIsSuccess={lastMessageIsSuccess}
      />
      <LastMessageTime lastMessage={lastMessage} />
    </Button>
  );
};

export default Group;
