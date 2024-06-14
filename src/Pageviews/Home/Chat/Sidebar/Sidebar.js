import {
  ChatBubbleOutlineOutlined,
  PermContactCalendarOutlined,
} from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import ContactList from "./List/ContactList/ContactList";
import ChatList from "./List/ChatList/ChatList";

const Sidebar = ({
  chatOrContact,
  setChatOrContact,
  // setSelectedChat,
  allChatListData,
  shouldRefreshChatId,
}) => {
  return (
    <Box sx={{ width: "25%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            sx: { borderRadius: "96px" },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <button
            onClick={() => setChatOrContact("chat")}
            style={{
              color: chatOrContact === "chat" ? "white" : "#424E79",
              border: chatOrContact === "chat" ? "0px" : "1px solid #D3DFEA",
              background: chatOrContact === "chat" ? "#24459C" : "white",
              "&:hover": {
                background: "#24459C",
              },
              borderRadius: "100%",
              width: "45px",
              height: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <ChatBubbleOutlineOutlined />
          </button>
          <button
            onClick={() => setChatOrContact("contact")}
            style={{
              color: chatOrContact === "contact" ? "white" : "#424E79",
              border: chatOrContact === "contact" ? "0px" : "1px solid #D3DFEA",
              background: chatOrContact === "contact" ? "#24459C" : "white",
              "&:hover": {
                background: "#24459C",
              },
              borderRadius: "100%",
              width: "45px",
              height: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <PermContactCalendarOutlined />
          </button>
        </Box>
      </Box>
      {chatOrContact === "chat" && (
        <ChatList
          chats={allChatListData?.data}
          shouldRefreshChatId={shouldRefreshChatId}
          // setSelectedChat={setSelectedChat}
        />
      )}
      {chatOrContact === "contact" && (
        <ContactList setChatOrContact={setChatOrContact} />
      )}
    </Box>
  );
};

export default Sidebar;
