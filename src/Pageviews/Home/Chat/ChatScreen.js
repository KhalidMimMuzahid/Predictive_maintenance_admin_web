import React, { useState } from "react";
import MessageModal from "../ServiceProvider/serviceProviderDetails/modal/MessageModal";
import CallModal from "../ServiceProvider/serviceProviderDetails/modal/CallModal";
import { Box, Button, Typography } from "@mui/material";
import {
  EmailOutlined,
  InfoOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import Sidebar from "./Sidebar/Sidebar";
import MainScreen from "./ChatBox/MainScreen";

const ChatScreen = () => {
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [chatOrContact, setChatOrContact] = useState("chat");
  return (
    <>
      {messageModalOpen && (
        <MessageModal
          messageModalOpen={messageModalOpen}
          setMessageModalOpen={setMessageModalOpen}
        />
      )}
      {callModalOpen && (
        <CallModal
          callModalOpen={callModalOpen}
          setCallModalOpen={setCallModalOpen}
        />
      )}
      <Box sx={{ padding: "40px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
              Chats
            </Typography>
            <div style={{ display: "flex", gap: "4px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Typography>Dashboard / </Typography>
                <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
                  Chats
                </Typography>
              </Box>
            </div>
          </Box>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Button
              onClick={() => {
                setMessageModalOpen(!messageModalOpen);
              }}
              sx={{
                height: "48px",
                width: "48px",
                background: "#DEE5F7",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#565B95",
              }}
            >
              <EmailOutlined />
            </Button>
            <Button
              onClick={() => {
                setCallModalOpen(!callModalOpen);
              }}
              sx={{
                height: "48px",
                width: "48px",
                background: "#DEE5F7",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#565B95",
              }}
            >
              <PhoneOutlined />
            </Button>
            <Button
              sx={{
                height: "48px",
                width: "48px",
                background: "#24459C",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            >
              <InfoOutlined />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: "700px",
            display: "flex",
            background: "white",
            padding: "30px 16px 0px 16px",
            borderRadius: "4px",
            marginTop: "24px",
          }}
        >
          <Sidebar
            chatOrContact={chatOrContact}
            setChatOrContact={setChatOrContact}
          />
          <MainScreen />
        </Box>
      </Box>
    </>
  );
};

export default ChatScreen;
