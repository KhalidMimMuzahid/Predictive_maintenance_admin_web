import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile/Profile";

const User = ({ chat, users, isSuccessForGetUserInformation }) => {
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
        chat={chat}
        users={users}
        isSuccessForGetUserInformation={isSuccessForGetUserInformation}
        // isSuccessForChatByChat_id={isSuccessForChatByChat_id}
        // isSuccessForUsers={isSuccessForUsers}
      />
    </Button>
  );
};

export default User;
