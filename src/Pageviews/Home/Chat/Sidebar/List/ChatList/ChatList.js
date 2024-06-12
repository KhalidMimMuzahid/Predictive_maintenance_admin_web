import { Box, Button, Typography } from "@mui/material";
import React from "react";
import UserOrGroup from "./UserOrGroup/UserOrGroup";

const ChatList = ({ chats, setSelectedChat }) => {
  return (
    <Box
      sx={{
        marginTop: "24px",
        boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)",
        height: "630px",
        overflow: "scroll",
      }}
    >
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      {chats?.map((chat, i) => (
        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <UserOrGroup chat={chat} setSelectedChat={setSelectedChat} />
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        </Box>
      ))}
    </Box>
  );
};

export default ChatList;
