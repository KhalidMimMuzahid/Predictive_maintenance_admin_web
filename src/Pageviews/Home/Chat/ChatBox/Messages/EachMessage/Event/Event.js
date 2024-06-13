import { Box } from "@mui/material";
import React from "react";
import { useGetMessage } from "../../../../Sidebar/List/ChatList/UserOrGroup/Group/NameAndMessage/Message/useGetMessage.";

const Event = ({ user, message }) => {
  const { isLoading, message: message2 } = useGetMessage({
    lastMessage: message,
    lastMessageIsSuccess: true,
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexDirection: message?.sender === user?._id ? "row-reverse" : "row",
        color: message?.sender === user?._id ? "white" : "row",
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
        }}
      >
        <h3
          className={`${
            message?.sender === user?._id ? "talkbubbleAdmin" : "talkbubbleUser"
          }`}
          style={{
            background: message?.sender === user?._id ? "#24459C" : "#EAEEFA",
            borderRadius: "4px",
            padding: "10px",
            fontSize: "14px",
          }}
        >
          {message2 || "loading..."}
        </h3>
      </Box>
    </Box>
  );
};

export default Event;
