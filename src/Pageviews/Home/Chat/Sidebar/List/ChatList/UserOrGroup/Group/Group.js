import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import NameAndMessage from "./NameAndMessage/NameAndMessage";
import LastMessageTime from "./LastMessageTime/LastMessageTime";
import { useNavigate } from "react-router-dom";

const Group = ({
  chat,
  users,
  isSuccess,
  lastMessageIsSuccess,
  lastMessage,
}) => {
  // console.log(chat);

  const navigate = useNavigate();
  return (
    <Button
      className="chat_list_box"
      onClick={() => {
        navigate(`/chat/${chat?._id}`);
      }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: "24px",
        textTransform: "none",
        color: "#56638D",
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
