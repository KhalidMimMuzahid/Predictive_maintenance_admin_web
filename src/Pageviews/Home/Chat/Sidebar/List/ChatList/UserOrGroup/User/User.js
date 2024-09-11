import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile/Profile";
import NameAndMessage from "./NameAndMessage/NameAndMessage";
import LastMessageTime from "./LastMessageTime/LastMessageTime";
import { useNavigate } from "react-router-dom";

const User = ({
  chat,
  users,
  isSuccess,
  lastMessage,
  lastMessageIsSuccess,
  // setSelectedChat,
}) => {
  const navigate = useNavigate();
  // const
  return (
    <Button
      className="chat_list_box"
      onClick={() => {
        navigate(`/chat/${chat?._id}`);
      }}
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
        lastMessageIsSuccess={lastMessageIsSuccess}
      />
      <LastMessageTime lastMessage={lastMessage} />
    </Button>
  );
};

export default User;
