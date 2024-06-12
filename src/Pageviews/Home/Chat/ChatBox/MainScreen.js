import React from "react";
import Topbar from "./Topbar/Topbar";
import { Box } from "@mui/material";
import SendMessage from "./SendMessage";
import Messages from "./Messages/Messages";
import { useGetChatByChatIdQuery } from "../../../../features/chat/chatSlice";

const MainScreen = ({ selectedChat }) => {
  // const { data: chatById, isSuccess: isSuccessForChatByChat_id } =
  //   useGetChatByChatIdQuery(selectedChat);
  return (
    <Box sx={{ width: "70%", position: "relative" }}>
      <Topbar
        // chatBox={chatById?.data}
        selectedChat={selectedChat}
        // isSuccessForChatByChat_id={isSuccessForChatByChat_id}
      />
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Messages />
      <SendMessage />
    </Box>
  );
};

export default MainScreen;
