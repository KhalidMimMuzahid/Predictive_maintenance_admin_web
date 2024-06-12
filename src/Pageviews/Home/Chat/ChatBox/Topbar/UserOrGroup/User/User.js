import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile/Profile";

const User = ({
  selectedChat,
  // isSuccessForChatByChat_id, isSuccessForUsers
}) => {
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
      <Profile
        selectedChat={selectedChat}
        // isSuccessForChatByChat_id={isSuccessForChatByChat_id}
        // isSuccessForUsers={isSuccessForUsers}
      />
    </Button>
  );
};

export default User;
