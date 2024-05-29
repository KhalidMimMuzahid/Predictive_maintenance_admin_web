import {
  ChatBubbleOutlineOutlined,
  PermContactCalendarOutlined,
} from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";
import Message from "./Message";
import ContactList from "./ContactList";

const Sidebar = ({ chatOrContact, setChatOrContact }) => {
  const users = [
    {
      name: "Alice Johnson",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      message: "Hello there!",
      active_time: new Date().toLocaleTimeString(),
      gmail: "alma.lawson@example.com",
    },
    {
      name: "Bob Smith",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      message: "Good morning!",
      active_time: new Date().toLocaleTimeString(),
      gmail: "alma.lawson@example.com",
    },
    {
      name: "Charlie Brown",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      message: "How are you?",
      active_time: new Date().toLocaleTimeString(),
      gmail: "alma.lawson@example.com",
    },
    {
      name: "Diana Prince",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      message: "Great to see you!",
      active_time: new Date().toLocaleTimeString(),
      gmail: "alma.lawson@example.com",
    },
    {
      name: "Evan Wright",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      message: "Let's catch up soon.",
      active_time: new Date().toLocaleTimeString(),
      gmail: "alma.lawson@example.com",
    },
  ];
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
      {chatOrContact === "chat" && <Message users={users} />}
      {chatOrContact === "contact" && <ContactList users={users} />}
    </Box>
  );
};

export default Sidebar;
